var express = require('express')
var path = require('path');
var http = require('http');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
var Task = require('./server/models/tasks');

mongoose.connect('mongodb://localhost/db_todo');
require('./server/routes')(app);

app.use(express.static(path.join(__dirname, 'dist')));
app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname, 'dist/index.html'));
})

app.listen(4200, function () {
  console.log('Example app listening on port 4200!')
})