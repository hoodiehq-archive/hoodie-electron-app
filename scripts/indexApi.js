var applist = {}

applist.findAll = function() {
  var appsData = localStorage.getItem('apps');
  var apps = appsData ? JSON.parse(appsData) : [];
  return Promise.resolve(apps)
}

applist.add = function(app) {
  app.id = Math.random().toString(36).substr(2, 7);
  return applist.findAll()
    .then(function(apps) {
      apps.push(app)
      localStorage.setItem('apps', JSON.stringify(apps))
      return app
    })
}
applist.find = function(id) {
  return applist.findAll()
    .then(function(apps) {
      var findApp = function(app) {
        return app.id === id;
      };
      return apps.find(findApp);
    })
}
