/* global localStorage */
var Apps = {}

Apps.findAll = function () {
  var appsData = localStorage.getItem('apps')
  var apps = appsData ? JSON.parse(appsData) : []
  return Promise.resolve(apps)
}

Apps.add = function (app) {
  app.id = Math.random().toString(36).substr(2, 7)
  app.state = 'stopped'
  return Apps.findAll()
    .then(function (apps) {
      apps.push(app)
      localStorage.setItem('apps', JSON.stringify(apps))
      return app
    })
}

Apps.find = function (id) {
  return Apps.findAll()
    .then(function (apps) {
      var findApp = function (app) {
        return app.id === id
      }
      return apps.find(findApp)
    })
}

Apps.update = function (app) {
  return Apps.findAll()
    .then(function (apps) {
      var newApps = apps.map(function (currentApp) {
        if (currentApp.id === app.id) {
          if (app.name) {
            currentApp.name = app.name
          }
          if (app.state) {
            currentApp.state = app.state
          }
        }
        return currentApp
      })
      localStorage.setItem('apps', JSON.stringify(newApps))
      return app
    })
}

Apps.start = function (app) {
  app.state = 'started'
  return Apps.update(app)
}

Apps.stop = function (app) {
  app.state = 'stopped'
  return Apps.update(app)
}

Apps.remove = function (id) {
  return Apps.findAll()
    .then(function (apps) {
      var removedApp
      apps = apps.filter(function (app) {
        if (app.id === id) {
          removedApp = app
          return false
        }
        return true
      })
      localStorage.setItem('apps', JSON.stringify(apps))
      return removedApp
    })
}
