<detail-app-container>
  <div class="row main-nav">
    <div class="col-sm-4">
      <button type="button" id="go-back-btn" class="btn btn-default pull-left">
        <span class="glyphicon glyphicon-arrow-left"></span>
      </button>
    </div>
    <div class="col-sm-4">
      <h3 id="name-app" data-id="" class="text-center"></h3>
    </div>
    <div class="col-sm-4">
      <button id="edit-button" type="button" class="btn btn-default pull-right" >
        <span class="glyphicon glyphicon-pencil"></span>
      </button>
    </div>
  </div><!-- /.main-nav -->

  <div class="well">
    <!-- start button -->
    <button type="button" class="btn btn-default center-block main-button" id='start-button' data-state="">
      <i class="glyphicon glyphicon-play" aria-hidden="true"></i> <span id="button-label">Start</span>
    </button>
    <!-- stop button -->
    <button type="button" class="btn btn-default center-block main-button" id='stop-button' data-state="">
      <i class="glyphicon glyphicon-stop" aria-hidden="true"></i> <span id="button-label">Stop</span>
    </button>
    <!-- main links -->
    <ul class="list-group main-links" id="link-details">
      <li class="list-group-item"><span class="glyphicon glyphicon-folder-open"></span> <a href="#"><span id="folder"></span></a></li>
      <li class="list-group-item"><span class="glyphicon glyphicon-globe"></span><a href="#">http://localhost:6001</a></li>
      <li class="list-group-item"><span class="glyphicon glyphicon-user"></span><a href="#">http://localhost:6001/hoodie/admin</a></li>
    </ul>
  </div>
  <button type="button" id="delete-button" data-id="" class="btn btn-sm center-block">
    <i class="glyphicon glyphicon-trash" aria-hidden="true"></i> <span>Delete</span>
  </button>
</detail-app-container>
