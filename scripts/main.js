//$("#wrapper").load("sidebar.html")
//index.html
//display the creat app element, when a user click the new app button
// var apps;
// if ((typeof localStorage.getItem('apps') !== "undefined") &&
//  (localStorage.getItem('apps') !== null))
// 	apps = JSON.parse(localStorage.getItem('apps'));
// else {
// 	apps = [];
// }
var appsData = localStorage.getItem('apps');
var apps = appsData ? JSON.parse(appsData) : [];
// testing
//var apps = JSON.parse(localStorage.getItem('apps')) || [];
$("#new-app-btn").on("click", function(){
	$("#apps-container,#create-app-container").toggle();
	//create an new app, when a user click 'create button'
	var createBtn = document.querySelector("#choose-create");
	if(createBtn){
		createBtn.addEventListener("click",function(){
			//create app array for exisiting apps
			var appname = document.getElementsByTagName("input")[0].value;
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
				//JS
				//window.location.replace("detail_app_page.html");
				//Jquery
				//localStorage.getItem('apps');
				var url = "index.html#"+app.name;
				$(location).attr('href',url);
				$("#create-app-container,#detail-app-container").toggle();
			}
		});
	}
});


//empty the text in the text field, when a user click the 'cancel button'
var cancelBtn = document.querySelector("#cancel-create");
if(cancelBtn){
	cancelBtn.addEventListener("click",function(){
		$("#apps-container,#create-app-container").toggle();
	});
}

var goBackBtn = document.querySelector("#goBackBtn");
var appLists = document.querySelector("#appLists");
if(goBackBtn){
	goBackBtn.addEventListener("click",function(){
    apps.forEach(function(app){
			var $li = document.createElement('li');
			$li.textContent = app.name || '-';
			appLists.appendChild($li);
		});
		$("#apps-container,#create-app-container").toggle();
	});
}


// for (i=0;i<apps.length;i++)
// {
// 	var container = $('#convoy_list');
// 	var result = '<li role="presentation" class="divider"><li role="presentation">' +
// 							 '<button role="menuitem" tabindex="-1" type="button" class="btn btn-secondary btn-sm btn-block">' +
// 							 '<i class="glyphicon glyphicon-folder-open"></i> ' +
// 							 apps[i].name + '</button></li></li>';
//  container.append(result);
//  //console.log($('<li>', container));
//  console.log('apps JSON.stringify:'+ apps[i].name);
//  $('#name-app').html(appname);
// }

//detail_app_page.html
//var lengthApp = apps.length - 1;
//var getAppName = apps[lengthApp];
var appname = location.hash.substr(1);
console.log(appname);

$(function() {
	//change app name
	$('#js-change-appname').on('click', function () {
		var changed = $('#rename-app').val();
		$('#name-app').text( changed );
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
