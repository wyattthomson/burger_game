var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');

//establish a port
var PORT = process.env.PORT || 2000;
var app = express();

// express config
app.use(express.static(__dirname +"/public"));
app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride("__method"));
app.engine("handlebars", exphbs({defaultLayout:"main"}));
app.set("view engine", "handlebars");

// routing
var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);
app.use("/update", routes);
app.use("create", routes);
app.use("create", routes);

app.listen(PORT, function() {
	console.log("Listening on port 2000")
})