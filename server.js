var express = require("express");
var path = require("path");

var app = express();
const host = '0.0.0.0';
var PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname+'/app/public/')));

require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);

app.listen(PORT, host, function () {
    console.log(`Our app is running on port ${PORT}`);
});