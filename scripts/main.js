$("#new-app-btn").on("click", function(){
  $("#apps-container").hide();
  $("#create-app-container").show();
  $("#detail-app-container").hide();
});

//create an new app, when a user click 'create button'
var createBtn = document.querySelector("#choose-create");
createBtn.addEventListener("click",function(event){
  //create app array for exisiting apps
  var appname = document.getElementsByTagName("input")[0].value;
  var app = { name: appname};
  if(app.name){
    applist.add({
      name : appname
    })
    .then(function (app) {
      makeAppList();
      showAppDetail(app.id);
    })
  }
})

function showAppDetail(id) {
  applist.find(id)

  .then(function (app) {
    var url = "index.html#"+app.id;
  	$(location).attr('href',url);
  	console.log("loc:" + location);
  	$('#name-app').html(app.name);
  	$('#folder').html('~Hoodie/'+app.name);
  	$("#create-app-container,#detail-app-container").toggle();
  })
}
// show apps list in html once the document is ready
$(document).ready(function(){
	makeAppList();
});

function makeAppList() {
	var appLists = document.querySelector("#appLists");
	applist.findAll()
	.then(function(apps){
		apps.forEach(function(app){
			console.log(app);
			var $li = document.createElement('li');
			$li.className = 'list-group-item';
			$li.setAttribute('id', app.id);
			//$li.textContent = app.name || '-';
			$li.innerHTML = `
			<button type ="button" class="btn btn-lg btn-block">${app.name || '-'}
			<i class="glyphicon glyphicon-play-circle pull-right"></i></button>
			`;
			appLists.appendChild($li);
		});
	})

}

$("#appLists").on("click","li",function(event){
	var li = event.currentTarget;
	console.log(li);
	var id = $(li).attr('id');
	console.log(id);
	$("#apps-container").hide();
	$("#create-app-container").show();
	showAppDetail(id);
});
//empty the text in the text field, when a user click the 'cancel button'
var cancelBtn = document.querySelector("#cancel-create");
if(cancelBtn){
	cancelBtn.addEventListener("click",function(){
		$("#apps-container,#create-app-container").toggle();
	});
}

var goBackBtn = document.querySelector("#goBackBtn");
if(goBackBtn){
	goBackBtn.addEventListener("click",function(){
		//$("#apps-container,#create-app-container").toggle();
		$("#apps-container").show();
		$("#create-app-container").hide();
		$("#detail-app-container").hide();
	});
}
var appId = location.hash.substr(1);
console.log(appId);

$(function() {
	//change app name
	$('#js-change-appname').on('click', function () {
		var changed = $('#rename-app').val();
		$('#name-app').text( changed );
		$('#folder').text('~Hoodie/'+changed);
	});

	//toggle start/stop button
	$('#main-button').on('click', function () {
		var $el = $(this);

		//textNode = this.lastChild;
		console.log($el);
		console.log($el.text());
		console.log($el.text().trim() + " ? " + 'Start');
		console.log($el.text() === 'Start');
		console.log($el.text().trim() === 'Start');
		$el.find('span').toggleClass('glyphicon-play glyphicon-stop');
		$el.toggleClass('main-button');
		//check
		if( $el.text().trim() === 'Start'){
			$("#link-details").show();
		}else if( $el.text().trim() === 'Stop'){
			$("#link-details").hide();
		}
		// change
		var label = $el.text().trim() === 'Start' ? 'Stop' : 'Start';
		$el.find('span').text(label);
	});

});
