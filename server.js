// requiring in express & middleware that does stuff
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');


var port = process.env.PORT || 3000;

var app = express();

var exphbs = require("express-handlebars");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride("_method"));

// handlebars setup
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(port);
