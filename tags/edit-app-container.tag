<edit-app-container if={show}>
  <form onsubmit={handleSubmit}>
    <p class="control-group">
      <label class="control-label" for="rename-app">New App Name:</label>
      <input class="form-control" name="app-new-name"  oninput={handleRenameInput} type="text" placeholder="Rename App here..." value="{app.name}"/>
      <div if={!validName} class="alert alert-warning" role="alert">
        Name must contain only letters, numbers and dashes.
      </div>
      <a href="#/apps/{app.id}" class="btn btn-default" id="cancelButton" >Cancel</a>
      <button disabled={!vaildName} type="submit" class="btn btn-primary" id="js-change-appname">Apply</button>
    </p>
  </form>

  <script>
  var self = this
  //  var renameInput = self["app-new-name"].value

  handleRenameInput(event){
    var renameInput = this["app-new-name"].value
    console.log("hi")
    console.log("handleRenameInput :",renameInput)
    var allowedLetters = /^[a-z0-9-]+$/
    if(renameInput.match(allowedLetters)){
      console.log("vaild")
      self.vaildName = true
    }else{
      console.log("invalid")
      self.vaildName = false
    }
  }

  handleSubmit (event) {
    var newName = this['app-new-name'].value
    //console.log("handleSubmit : ", renameInput)
    console.log("handleSubmit : ", newName)
    //self.app.name = renameInput
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
