var fs = require('fs');
var path = require('path');
var mime = require('mime');
var router = require('./router');
var createChat = require('./lib/chat_server');
var app = require('http').createServer(handler)

// http.createServer(function (request, response){
//   router(request, response);
//
// }).listen(8080);
//
// console.log('Server Running, great');

app.listen(8080);

function handler (req, res) {
  // console.log(req.url)
  // if you put req.url in line below, have to navigate to index.html
  // fs.readFile(__dirname + '/' + req.url,
  //   function (err, data) {
  //     if (err) {
  //       res.writeHead(500);
  //       return res.end('Error loading index.html');
  //     }
  //
  //     res.writeHead(200);
  //     res.end(data);
  //   });
  router(req, res);
}

createChat(app);