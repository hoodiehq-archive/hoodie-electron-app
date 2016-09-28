<create-app-container if={show}>
  <div class="well">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <!-- create app-->
        <form class="form-group" onsubmit={handleSubmit}>
          <h3 class="text-center">Let's create Hoodie App :D</h3>
          <div class="control-group">
            <label class="control-label" for="new-app-name">App Name</label>
            <input name="new-app-name" oninput={handleInput} class="form-control from-size" placeholder="Type your app name">
          </div>
          <div if={!validName} class="alert alert-warning" role="alert">
            Name must contain only letters, numbers and dashes.
          </div>
          <div class="form-actions">
            <a href="#/" class="btn btn_cancel pull-right btn-size-move">Cancel</a>

            <button disabled={!validName} type="submit" class="btn btn-primary pull-right btn-size-move">create</button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <script>
    var self = this


    handleInput(event){
      var input = this['new-app-name'].value
      var letters = /^[a-z0-9-]+$/
      if(input.match(letters))
        {
          console.log("valid")
        self.validName = true
        }else{
          console.log("invalid")
          self.validName = false
        }
    }


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
