'use strict';

var express = require('express');
var bodyparser = require('body-parser');
var app = express();
var fs = require('fs');

app.use(bodyparser.json());

app.get('/', function(req, res){
  res.end("Hi, tell me your name!");
});

app.post('/:key', function(req, res ){
  var file = ('./DB/', + req.params.key + '.JSON');
  fs.writeFile(file, JSON.stringify(req.body), function(err){
    if (err) throw err;
  }(req.body));
  res.json(req.body);
});

app.get('/:key', function(req, res){
  var file = ('/DB/' + req.params.key + '.JSON');
  var data = __dirname + file;
  res.sendFile(data);
  });


app.listen(8080);
module.exports = app;
