const chai = require('chai');
const assert = chai.assert;

const Paddle = require('../lib/paddle');

describe('Paddle', function() {
  context('default', function(){
  var paddle = new Paddle({
    x: 20,
    y: 20,
    width: 100,
    height: 10,
  })

  it('should have a function "paddle"', function() {
    assert.isFunction(Paddle);
  });

  
});
});
