<apps-container if={show}>
  <%-- <div class="well">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <button id="new-app-btn" type="button" class="btn btn-lg btn-block btn-primary" onclick = {newAppForm} >
          New App
          <i class="glyphicon glyphicon-plus-sign pull-right"></i>
        </button>

        <ul class="list-group" id="app-list">
          <!-- New App menu-->
        </ul>
      </div>
    </div>
  </div> --%>

  <p> test </P>
  <script>
debugger;
      var self = this
      newAppForm(){
        window.location.href='#/new'
      }
      // routing
      var localRoute = riot.route.create()
      localRoute(function () {
        self.show = false
        self.update()
      })
    localRoute('/', function () {
        self.show = true
        self.update()
      })
      </script>

</apps-container>
