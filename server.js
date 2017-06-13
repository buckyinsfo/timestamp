'use strict';

var express = require('express');
var routes = require('./app/routes/index.js');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


// Express
var app = express();
app.use( bodyParser.urlencoded( {'extended':'true'} ));
app.use( bodyParser.json() );

// Mongoose
mongoose.connect( 'mongodb://localhost/fcc_timestamp' );

// Routes
app.use( '/api', require( './routes/api' ));

app.get('*', function (req, res) {
    res.send('Express Server 1 - ' + process( req.url.slice(1) ) );
    res.end();
});

//app.set('port', process.env.PORT || 3000);

// Start server
app.listen(3000, function () {
    console.log('Listening on port 3000!')
});











/*
var process= function ( in_str ) {
    var result = '';

    if ( in_str ) {
        let arr = in_str.split(' ');
`````        {
            if ( arr.length === 1 && !isNaN( arr[0] ) ) {
                var date = new Date(arr[0]);
                var month = date.getMonth();
                var day = date.getDay();
                var yr = date.getFullYear();

                result = month + ' ' + day + ', ' + yr;

            } else {

                }
            }
        }
    return result;
}

mongo.connect('mongodb://localhost:27017/clementinejs', function (err, db) {

    if (err) {
        throw new Error('Database failed to connect!');
    } else {
        console.log('MongoDB successfully connected on port 27017.');
    }

    app.set('port', process.env.PORT || 3000);

    app.use('/public', express.static(process.cwd() + '/public'));
    app.use('/controllers', express.static(process.cwd() + '/app/controllers'));

    routes(app, db);

    app.listen(3000, function () {
        console.log('Listening on port 3000!');
    })
});

*/