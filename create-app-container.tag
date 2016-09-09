<create-app-container if = {show}>
  <div class="well">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <!-- create app-->
        <form class="form-group" id="form-new-app">
          <h3 class="text-center">Let's create Hoodie App :D</h3>
          <div class="control-group">
            <label class="control-label" for="empty-text">App Name</label>
            <input id="empty-text" type="text" class="form-control from-size" placeholder="Type your app name">
          </div>
          <div class="form-actions">
            <button onclick = {cancelForm} id="cancel-create" type="button" class="btn btn_cancel pull-right btn-size-move">Cancel</button>
            <button id="choose-create" type="submit" class="btn btn-primary pull-right btn-size-move">create</button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <script>

  // $newAppForm.on('submit', function (event) {
  //   event.preventDefault()
  //
  //   // create app array for exisiting apps
  //   var app = {
  //     name: $('#empty-text').val()
  //   }
  //   if (app.name) {
  //     applist.add(app)
  //
  //     .then(function (app) {
  //       setRoute(app.id)
  //     })
  //   }
  // })

  // $cancelNewAppFormButton.on('click', function () {
  //   setRoute('')
  // })

      var self = this
      cancelForm(){
        window.location.href='/'
      }
      // routing
      var localRoute = riot.route.create()
      localRoute(function () {
        self.show = false
        self.update()
      })
    localRoute('/new', function () {
        self.show = true
        self.update()
      })
      </script>

</create-app-container>
