const express = require('express')
const { engine } = require('express-handlebars')
const morgan = require('morgan');
const path = require('path');
const bodeyParser = require('body-parser');
const exphbs = require('express-handlebars');
const { execPath } = require('process');


function config(app) {
    //morgan
    app.use(morgan('short'));

    //bodyparser POST
    app.use(bodeyParser.json());
    app.use(bodeyParser.urlencoded({
        extented: true,
    }));

    app.use(express.urlencoded({
        extend: true,
    }));

    app.use(express.json());

    //handlebars
    app.engine('hbs', engine({
        extname: '.hbs',
        runtimeOptions: {
            allowProtoPropertiesByDefault: true,
        }
    }));
    app.set('view engine', 'hbs');
    app.set('views', path.join(__dirname, '../resources/views'));

    //static
    app.use(express.static(path.join(__dirname, '../public/')));

}

module.exports = config;