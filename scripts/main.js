/* global $, Apps, location */

// STORE REFERENCES TO HTML ELEMENTS
var $body = $(document.body)
var $showNewAppFormButton = $('#new-app-btn')
var $newAppForm = $('#form-new-app')
var $newAppName = $('#new-app-name')
var $updateAppForm = $('#form-update-app')
var $cancelNewAppFormButton = $('#cancel-create')
var $appList = $('#app-list')
var $appName = $('#app-name')
var $goBackButton = $('#go-back-btn')
var $startAppButton = $('#start-button')
var $stopAppButton = $('#stop-button')
var $deleteButton = $('#delete-button')
var $editButton = $('#edit-button')
var $cancelButton = $('#cancelButton')
var $detailAppContainer = $('#detail-app-container')
var $renameApp = $('#rename-app')

// INIT APP
$(document).ready(handleRoute)
$(window).on('hashchange', handleRoute)

// EVENT HANDLERS
$showNewAppFormButton.on('click', function () {
  setRoute('new')
})

$newAppForm.on('submit', function (event) {
  event.preventDefault()

  // create app array for exisiting apps
  var app = {
    name: $newAppName.val()
  }
  if (app.name) {
    Apps.add(app)

      .then(function (app) {
        setRoute(app.id)
      })
  }
})

$cancelNewAppFormButton.on('click', function () {
  setRoute('')
})

$appList.on('click', 'li', function (event) {
  var li = event.currentTarget
  var id = $(li).data('id')
  setRoute(id)
})

$goBackButton.on('click', function () {
  setRoute('')
})
$editButton.on('click', function (event) {
  var id = $appName.data('id')
  setRoute(id + '/edit')
})

$updateAppForm.on('submit', function (event) {
  event.preventDefault()

  var id = $('#edit-app-container').data('id')
  var newName = $renameApp.val()
  var app = {
    id: id,
    name: newName
  }
  if (newName) {
    Apps.update(app)

      .then(function (app) {
        setRoute(id)
      })
  }
})

$cancelButton.on('click', function (event) {
  var id = $appName.data('id')
  setRoute(id)
})

$deleteButton.on('click', function (event) {
  event.preventDefault()
  var id = $detailAppContainer.data('id')
  Apps.remove(id)
    .then(function (app) {
      setRoute('')
    })
})

// start button
$startAppButton.on('click', function () {
  var app = {
    id: $detailAppContainer.data('id')
  }
  Apps.start(app)

    .then(function (app) {
      $detailAppContainer.attr('data-state', 'started')
    })
})

// stop button
$stopAppButton.on('click', function () {
  var app = {
    id: $detailAppContainer.data('id')
  }
  Apps.stop(app)

    .then(function (app) {
      $detailAppContainer.attr('data-state', 'stopped')
    })
})

// HELPER METHODS
function setRoute (path) {
  location.hash = '#' + path
}

function handleRoute () {
  var path = location.hash.substr(1)

  if (path === '') {
    console.log('route: dashboard')
    renderAppList()
    return
  }

  if (path === 'new') {
    console.log('route: new app form')
    renderNewAppForm()
    return
  }

  if (path.substr(-5) === '/edit') {
    var id = path.substr(0, path.length - 5)
    console.log(`route: app edit (id: ${id})`)
    renderEditAppForm(id)
    return
  }

  renderAppDetail(path)
}

function renderNewAppForm () {
  $body.attr('data-state', 'new-app')
  $newAppName.val('')
}

function renderAppDetail (id) {
  Apps.find(id)

    .then(function (app) {
      $appName.html(app.name)
      $detailAppContainer.attr('data-state', app.state)
      $detailAppContainer.data('id', app.id)
      $appName.data('id', app.id)
      $('#folder').html('~Hoodie/' + app.name)
      $body.attr('data-state', 'app-detail')
    })
}
function renderAppList () {
  $body.attr('data-state', 'dashboard')
  $appList.empty()
  Apps.findAll()

    .then(function (apps) {
      apps.forEach(function (app) {
        var html = `
      <li data-id="${app.id}" class="list-group-item"
      <button type="button" class="btn btn-lg btn-block">
      ${app.name || '-'}
      <i class="glyphicon glyphicon-play-circle pull-right"></i>
      </button>
      </li>
      `
        $appList.append(html)
      })
    })
}
function renderEditAppForm (id) {
  Apps.find(id)

    .then(function (app) {
      $body.attr('data-state', 'edit-app')
      $renameApp.val(app.name)
      $('#edit-app-container').data('id', app.id)
    })
  $renameApp.val('')
}
