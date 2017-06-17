'use strict';

var express = require("express");
var bodyParser = require("body-parser");


var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 'extended': true }));

var routes = require("./app/routes/api.js")(app);

app.set('port', process.env.PORT || 5000);

var server = app.listen( app.get('port'), function () {
    console.log("Listening on port %s...", server.address().port);
});