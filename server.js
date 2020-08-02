var routes = require("./controllers/burgers_controller.js")
var exphbs = require("express-handlebars");
var express = require("express");
var routes = require("./controllers/burgers_controller.js");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(routes);

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));