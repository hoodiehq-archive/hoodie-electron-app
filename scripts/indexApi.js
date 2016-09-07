/* global localStorage */
var Apps = (function () {
  // PRIVATE STATE & HELPER FUNCTIONS
  var appsData = localStorage.getItem('apps')
  var apps = appsData ? JSON.parse(appsData) : []

  function save () {
    localStorage.setItem('apps', JSON.stringify(apps))
  }

  function find (id) {
    return apps.find(function (app) {
      return app.id === id
    })
  }

  function generateId () {
    return Math.random().toString(36).substr(2, 7)
  }

  // PUBLIC APIS
  var API = {}
  API.findAll = function () {
    return Promise.resolve(apps)
  }

  API.add = function (app) {
    app.id = generateId()
    app.state = 'stopped'
    apps.push(app)
    save()
    return Promise.resolve(app)
  }

  API.find = function (id) {
    return Promise.resolve(find(id))
  }

  API.update = function (app) {
    var currentApp = find(app.id)
    if (currentApp.id === app.id) {
      if (app.name) {
        currentApp.name = app.name
      }
      if (app.state) {
        currentApp.state = app.state
      }
    }
    save()
    return Promise.resolve(app)
  }

  API.start = function (app) {
    app.state = 'started'
    return API.update(app)
  }

  API.stop = function (app) {
    app.state = 'stopped'
    return API.update(app)
  }

  API.remove = function (id) {
    var removedApp = find(id)
    apps = apps.filter(function (app) {
      return app.id !== id
    })
    save()
    return Promise.resolve(removedApp)
  }

  return API
})()
