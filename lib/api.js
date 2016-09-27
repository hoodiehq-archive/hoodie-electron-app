var FS = require('fs')
var OS = require('os')
var Path = require('path')

var glob = require('glob')
var mkdirp = require('mkdirp')
var rimraf = require('rimraf')
var toId = require('to-id')

var HOME_DIR = OS.homedir()
var BASE_PATH = Path.join(HOME_DIR, 'hoodie')

module.exports = {
  add: function (properties) {
    return createPackageJson(properties.name)

    .then(function () {
      return {
        id: toId(properties.name),
        name: toId(properties.name)
      }
    })
  },
  findAll: function () {
    return assureHoodieFolder()

    .then(function () {
      return new Promise(function (resolve, reject) {
        glob(BASE_PATH + '/*/package.json', function (error, packageJsonPaths) {
          if (error) {
            return reject(error)
          }
          resolve(packageJsonPaths.map(toAppProperties))
        })
      })
    })
  },
  find: function (name) {
    return new Promise(function (resolve, reject) {
      try {
        var app = toAppProperties(Path.join(BASE_PATH, name, 'package.json'))
        resolve(app)
      } catch (error) {
        reject(error)
      }
    })
  },
  update: function () {
    return Promise.reject('Apps.update() is not yet implemented')
  },
  remove: function (id) {
    return this.find(id)

    .then(function (app) {
      return new Promise(function (resolve, reject) {
        rimraf(Path.join(BASE_PATH, id), function (error) {
          if (error) {
            return reject(error)
          }

          resolve(app)
        })
      })
    })
  },
  start: function () {
    return Promise.reject('Apps.start() is not yet implemented')
  },
  stop: function () {
    return Promise.reject('Apps.stop() is not yet implemented')
  }
}

function createPackageJson (name) {
  return new Promise(function (resolve, reject) {
    mkdirp(Path.join(BASE_PATH, toId(name)), function (error) {
      if (error) {
        return reject(error)
      }

      FS.writeFile(Path.join(BASE_PATH, toId(name), 'package.json'), JSON.stringify({
        name: toId(name),
        scripts: {
          start: 'hoodie'
        },
        dependencies: {
          hoodie: '24.0.0'
        },
        hoodie: {
          port: Math.floor(Math.random() * 1000 + 6000) // port number between 6000 * 6999
        }
      }, null, 2), function (error) {
        if (error) {
          return reject(error)
        }

        resolve()
      })
    })
  })
}

function assureHoodieFolder () {
  return new Promise(function (resolve, reject) {
    mkdirp(BASE_PATH, function (error) {
      if (error) {
        return reject(error)
      }

      resolve()
    })
  })
}

function toAppProperties (path) {
  var pkg = require(path)
  return {
    id: pkg.name,
    name: pkg.name,
    state: 'started',
    folder: Path.join(BASE_PATH, pkg.name),
    port: pkg.hoodie.port
  }
}
