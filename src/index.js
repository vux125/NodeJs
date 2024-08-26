const express = require('express');
const config = require('./configs/configengine');
const route = require('./routes/index.route');
const port = 3000;
const app = express();

config(app);

route(app);

app.listen(port, () => {
    console.log(`http://localhost:${3000}/admin`)
});