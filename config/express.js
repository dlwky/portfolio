/*
  File: express.js
  Student: Yza Castro
  Student ID: 301-272-405
  Date: September 28, 2023
*/

var express = require('express'),
    morgan = require('morgan'),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

module.exports = function () {
    var app = express();
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));

    } else if (process.env.NODE_ENV === 'production') {
        app.use(compress());
    }

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(methodOverride());
    app.set('views', './app/views');
    app.set('view engine', 'ejs');
    app.use('/', require('../app/routes/index.server.routes.js'));
    //require('../app/routes/index.server.routes.js')(app);
    app.use(express.static('./public'));
    app.use(express.static("./node_modules"));

    return app;
};