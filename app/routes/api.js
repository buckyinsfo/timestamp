'use strict';

const convertDate = require("../controllers/convert-date");

var apiRouter = function(app) {

    app.get("/", function(req, res) {
        res.sendFile( 'index.html', {root: './public' } );
    });

    app.get("*", function(req, res) {

        var epoch = convertDate.convertToEpoch( req.url );
        var nat_dt = convertDate.convertToNatural( req.url );

        if ( epoch ) {
            //nat_dt = convertDate.convertToNatural( epoch );
            nat_dt = req.url;
        } else if ( nat_dt ) {
            //epoch = convertDate.convertToEpoch( nat_dt );
            epoch = req.url;
        }

        var obj = { "unix": epoch, "natural": nat_dt };
        res.send( JSON.stringify( obj ) );
    });
}

module.exports = apiRouter;