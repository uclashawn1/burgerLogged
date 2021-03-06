var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burger_controller.js");
app.use("/", routes);
var port = process.env.PORT || $PORT || 0.0.0.0;

// db.sequelize.sync().then(function() {
//     app.listen(PORT, function() {
//         console.log("Listening on PORT " + port);
//     });
// });