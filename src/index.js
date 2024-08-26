const express = require('express');
const config = require('./config/configEngine');
const route = require('./routes/index.route');
const port = 15022;
const app = express();

config(app);

route(app);

app.listen(port, () => {
    console.log(`http://localhost:${port}/home`)
});