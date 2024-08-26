const express = require('express');
const router = express.Router();
const homeCtr = require('../controllers/home.ctr');

router.get('/', homeCtr.show);

module.exports = router;
