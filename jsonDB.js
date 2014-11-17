'use strict';

var express = require('express');
var bodyparser = require('body-parser');
var app = express();
var fs = require('fs');

app.use(bodyparser.json());

app.get('/', function(req, res){
  res.end("Hi, tell me your name!");
});

app.get('/:key', function(req, res){
  var user = req.params.key;
  var file = ('/DB/' + user + '.JSON');
  var data = __dirname + file;
  res.sendFile(data);
  });

app.post('/:key', function(req, res ){
  var user = req.params.key;
  var data = ('{\r\n  "name": ' + '"' + user + '"\r\n}');
  var filename = user.concat('.json');
  var filepath = __dirname + '/data/' + filename;

  fs.writeFile(filepath, data, function(err) {
    if (err) { throw err; }
  });
  res.json({msg: 'New User Saved!'});
});


app.listen(8080);

module.exports = app;
