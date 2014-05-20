var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var router = require('./router');

http.createServer(function (request, response){
  router(request, response);

}).listen(8080);

console.log('Server Running, great');