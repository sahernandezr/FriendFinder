var express = require("express");
var path = require("path");
//var friends = require("./app/data/friends");

var app = express();
const host = '0.0.0.0';
var PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname+'/app/public/')));
app.use(express.static(path.join(__dirname+'/app/data/')));

require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);
require("./app/data/friends.js");

app.listen(PORT, host, function () {
    console.log(`Our app is running on port ${PORT}`);
});