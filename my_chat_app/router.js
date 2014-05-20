var fs = require('fs');

var router = function(request, response){
  // response.writeHead(200, {'Content-Type': 'text/plain'});
  if (request.url === "/") {
    // console.log(request.url);
    fs.readFile("public/index.html", function (err, data) {
      if (err) {
        response.end("Error!!!");
      }
      response.end(data);
    })
  } else {
    fs.readFile("public/" + request.url,
        {encoding: "utf8"},
      function (err, data) {
        if (err) {
          response.writeHead(404);
        }
      response.write(data);
      response.end();
    })
  }
}
module.exports = router;