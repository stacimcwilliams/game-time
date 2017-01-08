const chai = require('chai');
const assert = chai.assert;

const Ball = require('../lib/ball');

describe('Ball', function() {
  context('default', function(){
  var ball = new Ball({
    x: 10,
    y: 10,
    width: 20,
    height
  })
it('should have a function "ball"', function() {
  assert.isFunction(Ball);
})
})
