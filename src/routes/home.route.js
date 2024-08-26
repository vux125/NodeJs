const express = require('express');
const homeCtr = require('../controllers/home.ctr');

const route = express.Router();

route.get('/', homeCtr.index);

module.exports = route;