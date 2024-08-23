const express = require('express');
const app = express();
const port = 3000;

app.get('/home', (req, res) => {
    res.send("hello_world")
});

app.listen(port, () => {
    console.log(`http://localhost:${3000}/home`)
});