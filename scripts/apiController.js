var fs = require('fs')
var exec = require('child_process').exec;
// var dir = './tmp'
//
// if (!fs.existsSync(dir)){
//     fs.mkdirSync(dir)
// }
//
//   fs.writeFile("tmp/package.json",JSON.stringify({
//     name: "tmp",
//     script: "tmp",
//     version: "1.0.0",
//     description: "",
//     main: "index.js",
//     keywords: [],
//     author: "",
//     license: "ISC",
//     scripts: {
//       start: "hoodie",
//       test: "echo \"Error: no test specified\" && exit 1"
//   }
//   },
//     null,2), function(err) {
//       if(err) {
//           console.log(err)
//       } else {
//           console.log("The file was saved!");
//       }
//   })
 var  apps = [{"name":"new","id":"nfvi2z1","state":"stopped"}]
  fs.writeFile('tmp/apps.json',JSON.stringify(apps),

      function (err) {
          if (err) {
              console.log(err)
          }
      }
  )
fs.readFile('tmp/apps.json', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var apps = apps ? JSON.parse(appsData) : []

  console.log(data);
});

function find (id) {
  return apps.find(function (app) {
    return app.id === id
  })
}



 //  var file = fs.createWriteStream('apps.js');
 //  file.on('error', function(err) { /* error handling */ });
 //  arr.forEach(function(v) { file.write(v.join(', ') + '\n'); });
 //  file.end();
 //
 //
 //
 //  exec('npm install hoodie --save', {
 //   cwd: 'tmp'
 // }, function(error, stdout, stderr) {
 //   console.log('stdout: ' + stdout);
 //   console.log('stderr: ' + stderr);
 //   if (error !== null) {
 //        console.log('exec error: ' + error);
 //   }
 // });



//   exec('npm start', {
//   cwd: 'tmp'
// }, function(error, stdout, stderr) {
//   console.log('stdout: ' + stdout);
//   console.log('stderr: ' + stderr);
//   if (error !== null) {
//        console.log('exec error: ' + error);
//   }
// });
