'use strict';

describe('before-death', function(){
  var sut = require('../lib/before-death');

  it('is a function', function(){
    sut.should.be.type('function');
  });

  it('accepts a function', function(){
    sut(function(){});
  });
});
