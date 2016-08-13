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
			var id = Math.random().toString(36).substr(2, 7);
			console.log('appname_value: '+ appname);

			//save the appname to the local storage
			var app = {id : id, name: appname};
			//app.dataset.id = id;
			console.log(id);
			if(app.name){
				// console.log('appname_localstorage: '+ appname);
				//localStorage.setItem("app-name", appname);
				//call a function(appLists)?
				apps.push(app);
				makeAppList();
				console.log(app);
				//localStorage.setItem('apps', apps);
				localStorage.setItem('apps', JSON.stringify(apps));

				console.log('apps array:'+apps);
				console.log('apps JSON.stringify:'+JSON.stringify(apps));

				var url = "index.html#"+app.name;
				$(location).attr('href',url);
				console.log("loc:" + location);
				$('#name-app').html(appname);
				$('#folder').html('~Hoodie/'+appname);
				$("#create-app-container,#detail-app-container").toggle();
			}
		});
	}
});

// show apps list in html once the document is ready
$(document).ready(function(){
	makeAppList();
});

function makeAppList() {
	var appLists = document.querySelector("#appLists");
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
}


// data-id="dzz1otm"
// var id = li.dataset.id
$("#appLists").on("click","li",function(event){
	var li = event.currentTarget;
	console.log(li);
	var id = $(li).attr('id');
	console.log(id);
});

//var appClicked = document.querySelector("${app.name}");
//$("#detail-app-container").show();

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
		$('#folder').text('~Hoodie/'+changed);
	});

	//toggle start/stop button
	$('#main-button').on('click', function () {
		var $el = $(this);
		var label;
		//textNode = this.lastChild;

		$el.find('span').toggleClass('glyphicon-play glyphicon-stop');
		$el.toggleClass('main-button');
		//check
		if( $el.text() === 'Start'){
			$("#link-details").show();
		}else if( $el.text() === 'Stop'){
			$("#link-details").hide();
		}
		//change
		label = ($el.hasClass('main-button') ? 'Stop' : 'Start')
		$el.text(label);
	});

});
