/* global $, applist, location */

// STORE REFERENCES TO HTML ELEMENTS
var $showNewAppFormButton = $('#new-app-btn')
var $newAppForm = $('#form-new-app')
var $cancelNewAppFormButton = $('#cancel-create')
var $appList = $('#appLists')
var $goBackButton = $('#goBackBtn')
var $submitAppChangeFormButton = $('#js-change-appname')
var $startStopAppButton = $('#main-button')

// INIT APP
$(document).ready(function () {
  makeAppList()
})

// EVENT HANDLERS
$showNewAppFormButton.on('click', function () {
  $('#apps-container').hide()
  $('#create-app-container').show()
  $('#detail-app-container').hide()
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
  $('#apps-container,#create-app-container').toggle()
})

$appList.on('click', 'li', function (event) {
  var li = event.currentTarget
  var id = $(li).attr('id')
  $('#apps-container').hide()
  $('#create-app-container').show()
  showAppDetail(id)
})

$goBackButton.on('click', function () {
  $('#apps-container').show()
  $('#create-app-container').hide()
  $('#detail-app-container').hide()
})

$submitAppChangeFormButton.on('click', function () {
  var changed = $('#rename-app').val()
  $('#name-app').text(changed)
  $('#folder').text('~Hoodie/' + changed)
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
    $('#create-app-container,#detail-app-container').toggle()
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
