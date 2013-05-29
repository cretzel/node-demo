var http = require('http');
var url = require('url');
var port = 8082;

http.createServer(function (req, res) {

  var pathname = url.parse(req.url).pathname;
  console.log("Request for " + pathname + " received.");

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');

}).listen(port, "127.0.0.1");

console.log('Server running at http://127.0.0.1:' + port);
