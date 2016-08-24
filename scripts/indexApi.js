/* global localStorage */
var applist = {}

applist.findAll = function () {
  var appsData = localStorage.getItem('apps')
  var apps = appsData ? JSON.parse(appsData) : []
  return Promise.resolve(apps)
}

applist.add = function (app) {
  app.id = Math.random().toString(36).substr(2, 7)
  app.status = ''
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
// applist.add = function (app) {
//   app.id = Math.random().toString(36).substr(2, 7)
//   return applist.findAll()
//     .then(function (apps) {
//       apps.push(app)
//       localStorage.setItem('apps', JSON.stringify(apps))
//       return app
//     })
// }
applist.update = function(app){
  return applist.findAll()
    .then(function (apps) {
      var newApps =apps.map(function (currentApp) {
        if (currentApp.id === app.id) {
          return {name:app.name, id:app.id}
        } else {
          return currentApp
        }
      })
      localStorage.setItem('apps', JSON.stringify(newApps))
      return app
    })
}
applist.remove = function(id){
  return applist.findAll()
.then (function (apps){
  apps =apps.filter(function(app){
    return app.id!==id
  })
  localStorage.setItem('apps', JSON.stringify(apps))
})
}
applist.start= function(app){
  return applist.findAll()
  .then (function(apps){
    apps = apps.map(function(currentApp){
      if(currentApp.id===app.id){
        currentApp.status = 'started'
      }
      return currentApp

    })

    localStorage.setItem('apps', JSON.stringify(apps))
    return apps.find(function (currentApp) {
      return currentApp.id === app.id
    })
  })

}
applist.stop= function(app){
  return applist.findAll()
  .then (function(apps){
    apps = apps.map(function(currentApp){
      if(currentApp.id===app.id){
        currentApp.status = 'stoped'
      }
      return currentApp

    })

    localStorage.setItem('apps', JSON.stringify(apps))
    return apps.find(function (currentApp) {
      return currentApp.id === app.id
    })
  })

}
