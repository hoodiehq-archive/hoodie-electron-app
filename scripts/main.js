/* global $, applist, location */
$('#new-app-btn').on('click', function () {
  $('#apps-container').hide()
  $('#create-app-container').show()
  $('#detail-app-container').hide()
})

// create an new app, when a user click 'create button'
var $createBtn = $('#choose-create')
$createBtn.on('click', function (event) {
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

function showAppDetail (id) {
  applist.find(id)

  .then(function (app) {
    location.hash = '#' + app.id
    $('#name-app').html(app.name)
    $('#folder').html('~Hoodie/' + app.name)
    $('#create-app-container,#detail-app-container').toggle()
  })
}
// show apps list in html once the document is ready
$(document).ready(function () {
  makeAppList()
})

function makeAppList () {
  var $appLists = $('#appLists')
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
        $appLists.append(html)
      })
    })
}

$('#appLists').on('click', 'li', function (event) {
  var li = event.currentTarget
  var id = $(li).attr('id')
  $('#apps-container').hide()
  $('#create-app-container').show()
  showAppDetail(id)
})

// empty the text in the text field, when a user click the 'cancel button'
var $cancelBtn = $('#cancel-create')
$cancelBtn.on('click', function () {
  $('#apps-container,#create-app-container').toggle()
})

var $goBackBtn = $('#goBackBtn')
$goBackBtn.on('click', function () {
  $('#apps-container').show()
  $('#create-app-container').hide()
  $('#detail-app-container').hide()
})

var appId = location.hash.substr(1)
console.log(appId)

$(function () {
  // change app name
  $('#js-change-appname').on('click', function () {
    var changed = $('#rename-app').val()
    $('#name-app').text(changed)
    $('#folder').text('~Hoodie/' + changed)
  })

  // toggle start/stop button
  $('#main-button').on('click', function () {
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
})
