var appsData = localStorage.getItem('apps');
var apps = appsData ? JSON.parse(appsData) : [];
$('body').on("click touchstart", "#new-app-btn", function(e){
  $("#container2, #container1, #detail_app_page").toggle();
});
$("#new-app-btn").on("click", function(){
  document.querySelector("#create-app").style.display = "block";
	//create an new app, when a user click 'create button'
	var createBtn = document.querySelector("#choose-create");
	if(createBtn){
		createBtn.addEventListener("click",function(){
			//create app array for exisiting apps
			var appname = document.querySelector("#empty-text").value;
			//debugger;
			console.log('appname_value: '+ appname);
			//save the appname to the local storage
			var app = {name: appname};
			if(app.name){
				// console.log('appname_localstorage: '+ appname);
				//localStorage.setItem("app-name", appname);
				apps.push(app);
				//localStorage.setItem('apps', apps);
				localStorage.setItem('apps', JSON.stringify(apps));
				console.log('apps array:'+apps);
				console.log('apps JSON.stringify:'+JSON.stringify(apps));
				//redirect from index page to detail_app_page
				var url = "detail_app_page.html#"+app.name;
				location.href = url;
			}
		});
	}
});
//empty the text in the text field, when a user click the 'cancel button'
var cancelBtn = document.querySelector("#cancel-create");
if(cancelBtn){
	cancelBtn.addEventListener("click",function(){
		$('#empty-text').val('');
	});
}
//detail_app_page.html
var appname = "";
//https://api.jquerymobile.com/hashchange/
//The hashchange event is fired when the fragment identifier of the URL has changed
//It reload the page with a new url
$( window ).on('hashchange',function() {
	appname = location.hash.substr(1);
	console.log(appname);
	$('#name-app').html(appname);
 });
 // Since the event is only triggered when the hash changes, we need to trigger
 // the event now, to handle the hash the page may have loaded with.
$(window).trigger('hashchange');
//display exisiting apps
for (i=0;i<apps.length;i++){
  var container = $('#container1');
  var result = `<li class="list-group-item " id="appbtns" >
 	<button type ="button" class="btn btn-lg btn-block"
 	onClick="self.location='detail_app_page.html#${apps[i].name}'">${apps[i].name}
 	<i class="glyphicon glyphicon-folder-open"></i></button>
  </li>`
  container.append(result);
 //console.log($('<li>', container));
 console.log('apps JSON.stringify:'+ apps[i].name);
}
$(function() {
	//change app name
	$('#js-change-appname').on('click', function () {
		var changed = $('#rename-app').val();
		$('#name-app').text( changed );
    app.name = changed
	});

	//toggle start/stop button
	$('#main-button').on('click', function () {
		var $el = $(this),
		textNode = this.lastChild;

		$el.find('span').toggleClass('glyphicon-play glyphicon-stop');
		textNode.nodeValue = ($el.hasClass('main-button') ? 'Stop' : 'Start')
		$el.toggleClass('main-button');
	});

});
