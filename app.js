const express = require('express');
const app = express();
require('dotenv').load();
app.set('view engine', 'pug');
// const path = require('path')
// const express = require('express');
// const app = express();
app.use(express.static('public'));



app.get('/', (req,res) => {
    res.render("includes/header.pug")

});

app.get('/maps', (req,res) => {
    res.render("maps.pug", {key: process.env.KEY})

});

app.get('/youtube', (req,res) => {
    res.render("youtube.pug", {key: process.env.KEY})

});


app.listen(3000);