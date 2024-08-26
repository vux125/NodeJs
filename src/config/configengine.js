const express = require('express')
const { engine } = require('express-handlebars')
const morgan = require('morgan');
const path = require('path');
const { execPath } = require('process');


function config(app) {
    app.use(morgan('short'));

    app.use(express.urlencoded({
        extend: true,
    }));

    app.use(express.json());

    app.engine('hbs', engine({
        extname: '.hbs',
    }));
    app.set('view engine', 'hbs');
    app.set('views', path.join(__dirname, '../resources/views'));

    app.use(express.static(path.join(__dirname, '../public')));

}

module.exports = config;