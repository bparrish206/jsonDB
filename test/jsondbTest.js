var app = require('../jsonDB.js');
var chai = require('chai');
var chaihttp = require('chai-http');
var expect = require('chai').expect;
var fs = require('fs');
chai.use(chaihttp);

describe('Simple JSON Database', function() {

  it('should retrieve JSON from a file', function(done){
    chai.request('http://localhost:8080')
    .get('/Brent')
    .end(function(err, res) {
      expect(err).to.eql(null);
      console.log(res.body);
      expect(res.body).to.eql({ 'Code rawks!': 'My socks!' });
      done();
    });
  });
});
