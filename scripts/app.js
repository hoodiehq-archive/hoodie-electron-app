// var fs = require('fs')
//
// var show = fs.readFileSync(__dirname + '/apps.tag', 'utf8')
//
// //error first call backs
//
// var show1 = fs.readFile(__dirname + '/apps.tag','utf8', function(err, data){
//   console.log (data)
// })
// console.log (show)
// var apps = appsData ? JSON.parse(appsData) : []


var indexApi = fs.readFileSync(__dirname + '/indexApi.js')




// fs.readdir('./tmp/',function(err,files){
//     if(err) throw err;
//     files.forEach(function(file){
//         // do something with each file HERE!
//     });
//  });

// function Apps (dir, files_){
//    var appsData = '/tmp'.getItem('apps')
//     files_ = appsData ? JSON.parse(appsData) : []
//
//
//     var files = fs.readdirSync(dir);
//     for (var i in files){
//         var name = dir + '/' + files[i];
//         if (fs.statSync(name).isDirectory()){
//             Apps(name, files_);
//         } else {
//             files_.push(name);
//         }
//     }
//     return files_;
// }
