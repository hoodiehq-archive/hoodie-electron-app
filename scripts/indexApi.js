/* global localStorage */
var applist = {}

applist.findAll = function () {
  var appsData = localStorage.getItem('apps')
  var apps = appsData ? JSON.parse(appsData) : []
  return Promise.resolve(apps)
}

applist.add = function (app) {
  app.id = Math.random().toString(36).substr(2, 7)
  app.state = 'stopped'
  return applist.findAll()
  .then(function (apps) {
    apps.push(app)
    localStorage.setItem('apps', JSON.stringify(apps))
    return app
  })
}
applist.find = function (id) {
  return applist.findAll()
  .then(function (apps) {
    var findApp = function (app) {
      return app.id === id
    }
    return apps.find(findApp)
  })
}

applist.update = function(app){
  return applist.findAll()
  .then(function (apps) {
    var newApps = apps.map(function (currentApp) {
      if (currentApp.id === app.id) {
        if(app.name){
          currentApp.name = app.name
        }
        if(app.state){
          currentApp.state = app.state
        }
      }
      return currentApp
    })
    localStorage.setItem('apps', JSON.stringify(newApps))
    //console.log(app.state)
    return app
  })
}

applist.start = function(app){
  app.state = 'started'
  return applist.update(app)
}

applist.stop = function(app){
  app.state = 'stopped'
  return applist.update(app)
}

applist.remove = function(id){
  return applist.findAll()
  .then (function (apps){
    apps = apps.filter(function(app){
      return app.id!==id
    })
    localStorage.setItem('apps', JSON.stringify(apps))
  })
  return app
}
