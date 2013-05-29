var http = require("http");
var db = require("mongojs").connect("mydb", ["things"]);

var server = http.createServer(function(req, res) {

    db.things.find({}, function(err, things) {
	if (err || !things) {
	    res.writeHead(404);
	} else {
	    
	    things.forEach(function(thing) {
		console.log(thing._id);
	    });

	    res.writeHead(200, {"Content-Type": "application/json"});
            var json = JSON.stringify(things);
	    res.end(json);
	}
    });

});
server.listen(8082);
console.log("Listening on 8082");