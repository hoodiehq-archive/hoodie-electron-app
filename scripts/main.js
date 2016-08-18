/* global $, applist, location */

// STORE REFERENCES TO HTML ELEMENTS
var $body = $(document.body)
var $showNewAppFormButton = $('#new-app-btn')
var $newAppForm = $('#form-new-app')
var $updateAppForm = $('#form-update-app')
var $cancelNewAppFormButton = $('#cancel-create')
var $appList = $('#app-list')
var $goBackButton = $('#go-back-btn')
var $startStopAppButton = $('#main-button')

// INIT APP
$(document).ready(function () {
  makeAppList()
})

// EVENT HANDLERS
$showNewAppFormButton.on('click', function () {
  $body.attr('data-state', 'new-app')
})

$newAppForm.on('submit', function (event) {
  event.preventDefault()

  // create app array for exisiting apps
  var appname = $('#empty-text').val()
  var app = {
    name: appname
  }
  if (app.name) {
    applist.add({
      name: appname
    })
      .then(function (app) {
        makeAppList()
        showAppDetail(app.id)
      })
  }
})

$cancelNewAppFormButton.on('click', function () {
  $body.attr('data-state', 'dashboard')
})

$appList.on('click', 'li', function (event) {
  var li = event.currentTarget
  var id = $(li).attr('id')
  showAppDetail(id)
})

$goBackButton.on('click', function () {
  $body.attr('data-state', 'dashboard')
})

$updateAppForm.on('submit', function (event) {
  event.preventDefault()
  var changed = $('#rename-app').val()
  $('#name-app').text(changed)
  $('#folder').text('~Hoodie/' + changed)
  $updateAppForm.closest('.modal').modal('hide')
})

// toggle start/stop button
$startStopAppButton.on('click', function () {
  var $el = $(this)
  $el.find('span').toggleClass('glyphicon-play glyphicon-stop')
  $el.toggleClass('main-button')
  // check
  if ($el.text().trim() === 'Start') {
    $('#link-details').show()
  } else if ($el.text().trim() === 'Stop') {
    $('#link-details').hide()
  }
  // change
  var label = $el.text().trim() === 'Start' ? 'Stop' : 'Start'
  $el.find('span').text(label)
})

// HELPER METHODS

function showAppDetail (id) {
  applist.find(id)

  .then(function (app) {
    location.hash = '#' + app.id
    $('#name-app').html(app.name)
    $('#folder').html('~Hoodie/' + app.name)
    $body.attr('data-state', 'app-detail')
  })
}

function makeAppList () {
  applist.findAll()
    .then(function (apps) {
      apps.forEach(function (app) {
        var html = `
          <li id="${app.id}" class="list-group-item"
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
