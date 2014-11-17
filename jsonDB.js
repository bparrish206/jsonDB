'use strict';

var express = require('express');
var bodyparser = require('body-parser');
var app = express();
var fs = require('fs');
var path = ('./DB/');

app.use(bodyparser.json());

app.get('/', function(req, res){
  res.end("Hi, tell me your name!");
});

app.post('/:user', function (req, res) {
  var ws = fs.createWriteStream(path + req.params.user + '.json');
  ws.write(JSON.stringify(req.body));
  ws.end();
  res.json(req.body);
});

app.get('/:user', function (req, res) {
  var rs = fs.createReadStream(path + req.params.user + '.json');
  rs.on('open', function () {
    res.writeHead(200, {'Content-Type': 'application/json'});
    rs.pipe(res);
  });
});

app.listen(8080);

module.exports = app;
