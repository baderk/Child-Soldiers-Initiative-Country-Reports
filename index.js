
// Require statements
var wordpress = require("wordpress");
var express = require('express');
var bodyParser = require('body-parser');

//Read from the Body -- Body parser
var app = express();
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Wordpress module- Create client
var client = wordpress.createClient({
    url: "https://dev-countryreportapp.pantheonsite.io/",
    username: "admin",
    password: "RSyzv^i^HvCtiaj5"
});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

// Post Function
app.post('/publishpost', function (req, res) {
	var title = req.body.title;
	var status = req.body.status;
  var content = req.body.content; // this is the content in the text editor

	var obj = new Object();
	obj.title = title;
	obj.content = content; //this probably should be the var status?
	obj.status = "draft";
	client.newPost(obj, (function(error, id) {
    console.log(error);
    console.log(id);
	}))
  	res.send("Submitted!");
   });


// Express Server Configuration. Now it runs on localhost:8081. Change this depending on where it's hosted at
var server = app.listen(process.env.PORT || 8081, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);

})
