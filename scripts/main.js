var appsData = localStorage.getItem('apps');
var apps = appsData ? JSON.parse(appsData) : [];

$("#new-app-btn").on("click", function(){
	//$("#apps-container,#create-app-container").toggle();
	$("#apps-container").hide();
  $("#create-app-container").show();
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

				var url = "index.html#"+app.name;
				$(location).attr('href',url);
				$("#create-app-container,#detail-app-container").toggle();
			}
		});
	}
});

var appLists = document.querySelector("#appLists");
apps.forEach(function(app){
	var $li = document.createElement('li');
	//$li.textContent = app.name || '-';
	$li.innerHTML = `<li class="list-group-item">
	<button type ="button" class="btn btn-lg btn-block">${app.name || '-'}
	<i class="glyphicon glyphicon-play-circle pull-right"></i></button>
	</li>`
	appLists.appendChild($li);
});

//empty the text in the text field, when a user click the 'cancel button'
var cancelBtn = document.querySelector("#cancel-create");
if(cancelBtn){
	cancelBtn.addEventListener("click",function(){
		//$("#apps-container,#create-app-container").toggle();
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
