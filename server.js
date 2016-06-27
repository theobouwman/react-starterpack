var twig = require('twig');
var express = require('express');
var app = express();
var mysql      = require('mysql');

twig = twig.twig;

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database: 'react'
});

app.use(express.static('build'));
app.set('view engine', 'twig')

app.get('/', function(req, res) {
    res.render('index.twig')
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});