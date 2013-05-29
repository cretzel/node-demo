var http = require("http");
var db = require("mongojs").connect("mydb", ["things"]);

exports.list = function(req, res) {
    db.things.find({}, function(err, things) {
	if (err || !things) {
	    res.writeHead(404);
	} else {

	    res.render('things', {title:"Things", things:things});

	}
    });

};
