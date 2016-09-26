<apps-container if={show}>
  <div class="well">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <a href="#/new" class="btn btn-lg btn-block btn-primary">
          New App
          <i class="glyphicon glyphicon-plus-sign pull-right"></i>
        </a>

        <ul class="list-group">
          <li each={apps}>
            <a href="#/apps/{id}" class="btn btn-lg btn-block">
              {name}
              <i class="glyphicon glyphicon-play-circle pull-right"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
