<detail-app-container if={show}>
  <div class="row main-nav">
    <div class="col-sm-4">
      <a href="#/" class="btn btn-default pull-left">
        <span class="glyphicon glyphicon-arrow-left"></span>
      </a>
    </div>
    <div class="col-sm-4">
      <h3 class="text-center">{app.name}</h3>
    </div>
    <div class="col-sm-4">
      <a href="#/apps/{app.id}/edit" class="btn btn-default pull-right" >
        <span class="glyphicon glyphicon-pencil"></span>
      </a>
    </div>
  </div><!-- /.main-nav -->

  <div class="well">
    <!-- start button -->
    <button type="button" onclick={handleStartClick} class="btn btn-default center-block main-button" if={app.state==='stopped'}>
      <i class="glyphicon glyphicon-play" aria-hidden="true"></i> <span>Start</span>
    </button>
    <!-- stop button -->
    <button type="button" onclick={handleStopClick} class="btn btn-default center-block main-button" if={app.state==='started'}>
      <i class="glyphicon glyphicon-stop" aria-hidden="true"></i> <span>Stop</span>
    </button>
    <!-- main links -->
    <ul class="list-group main-links" if={app.state==='started'}>
      <li class="list-group-item"><span class="glyphicon glyphicon-folder-open"></span> <a href="#">/path/to/{app.name}</a></li>
      <li class="list-group-item"><span class="glyphicon glyphicon-globe"></span><a href="#">http://localhost:6001</a></li>
      <li class="list-group-item"><span class="glyphicon glyphicon-user"></span><a href="#">http://localhost:6001/hoodie/admin</a></li>
    </ul>
  </div>
  <button type="button" onclick={handleDeleteClick} class="btn btn-sm center-block">
    <i class="glyphicon glyphicon-trash" aria-hidden="true"></i> <span>Delete</span>
  </button>

  <script>
    var self = this

    handleDeleteClick (event) {
      Apps.remove(self.app.id).then(function () {
        riot.route('/')
      })
    }

    handleStartClick (event) {
      Apps.start(self.app).then(function () {
        self.update()
      })
    }
    handleStopClick (event) {
      Apps.stop(self.app).then(function () {
        self.update()
      })
    }

    // routing
    var route = riot.route.create()
    route(function () {
      self.show = false
      self.update()
    })
    route('/apps/*', function (id) {
      self.show = true
      Apps.find(id).then(function (app) {
        self.app = app
        self.update()
      })
    })
  </script>
</detail-app-container>
