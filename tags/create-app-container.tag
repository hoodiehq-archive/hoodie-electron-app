<create-app-container if={show}>
  <div class="well">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <!-- create app-->
        <form class="form-group" onsubmit={handleSubmit}>
          <h3 class="text-center">Let's create Hoodie App :D</h3>
          <div class="control-group">
            <label class="control-label" for="new-app-name">App Name</label>
            <input name="new-app-name" class="form-control from-size" placeholder="Type your app name">
          </div>
          <div class="form-actions">
            <a href="#/" class="btn btn_cancel pull-right btn-size-move">Cancel</a>
            <button type="submit" class="btn btn-primary pull-right btn-size-move">create</button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <script>
    var self = this

    handleSubmit (event) {
      var newAppName = this['new-app-name'].value
      Apps.add({
        name: newAppName
      }).then(function () {
        riot.route('/')
      })
    }

    // routing
    var route = riot.route.create()
    route(function () {
      self.show = false
      self.update()
    })
    route('/new', function () {
      self.show = true
      self.update()
    })
  </script>
</create-app-container>
