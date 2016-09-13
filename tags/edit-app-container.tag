<edit-app-container if={show}>
  <form onsubmit={handleSubmit}>
    <p class="control-group">
      <label class="control-label" for="rename-app">New App Name:</label>
      <input class="form-control" name="app-new-name" type="text" placeholder="Rename App here..." value="{app.name}">
    </p>

    <p>
      <a href="#/apps/{app.id}" class="btn btn-default" id="cancelButton" >Cancel</a>
      <button type="submit" class="btn btn-primary" id="js-change-appname">Apply</button>
    </p>
  </form>

  <script>
    var self = this

    handleSubmit (event) {
      var newName = this['app-new-name'].value
      self.app.name = newName
      Apps.update(self.app).then(function () {
        riot.route('/apps/' + self.app.id)
      })
    }

    // routing
    var route = riot.route.create()
    route(function () {
      self.show = false
      self.update()
    })
    route('/apps/*/edit', function (id) {
      self.show = true
      Apps.find(id).then(function (app) {
        self.app = app
        self.update()
      })
    })
  </script>
</edit-app-container>
