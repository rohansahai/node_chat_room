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

// app.listen(80);

function handler (req, res) {
  fs.readFile(__dirname + '/public/index.html',
    function (err, data) {
      if (err) {
        res.writeHead(500);
        return res.end('Error loading index.html');
      }

      res.writeHead(200);
      res.end(data);
    });
}

createChat(app);