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
  res.writeHead(200);
  var ws = fs.createWriteStream('/DB/'+ req.params.key + '.json');
  ws.write(JSON.stringify(req.body));
  ws.end();
  res.end();
});

app.get('/:key', function(req, res){
  var file = ('/DB/' + req.params.key + '.JSON');
  var data = __dirname + file;
  res.sendFile(data);
  });

app.listen(8080);
module.exports = app;
