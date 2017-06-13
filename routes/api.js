'use strict';

const convertDate = require("../convert-date");
const path = require('path');


var apiRouter = function(app) {

    app.get("/", function(req, res) {
        res.sendFile( 'index.html', {root: './public' } );
    });

    app.get("*", function(req, res) {

        var obj = { "unix": 1450137600, "natural": "December 15, 2015" };

        res.send( JSON.stringify( obj ) );
    });
}

module.exports = apiRouter;