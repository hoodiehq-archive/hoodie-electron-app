<app>
  <apps-container />
  <create-app-container />
  <detail-app-container />
  <edit-app-container />

  <script>
  this.on('mount', function () {
    riot.route.start(true)
  })
  </script>
</app>
