'use strict';

var express = require("express");
var bodyParser = require("body-parser");


var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 'extended': true }));

var routes = require("./routes/api.js")(app);

app.set('port', process.env.PORT || 3000);

var server = app.listen( app.get('port'), function () {
    console.log("Listening on port %s...", server.address().port);
});



//app.get('/', function (req, res) {
//    res.send('Express Server 1 - ' /*+ process( req.url.slice(1) ) */ );
//    res.end();
//    res.sendFile( './public/index.html');
//    res.end();
//    console.log( process.cwd() );
//});
