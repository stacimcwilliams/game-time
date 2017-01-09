const chai = require('chai');
const assert = chai.assert;

const Ball = require('../lib/ball');

describe('Ball', function() {
  context('default', function(){
  var ball = new Ball({
    x: 10,
    y: 10,
    width: 20,
    height:20,
    })
  it('should have a function "ball"', function() {
  assert.isFunction(Ball);
});

  it('should instantiate our friend Ball', function() {
  assert.isObject(ball);
});

  it('should have a method called "moveBall()"', function (){
    assert.isFunction(ball.moveBall);
});

  it('"moveBall()" should increment the "x" value by 1', function (){
    ball.moveBall();
    assert.equal(ball.x, 11);
});

  it('"moveBall" should increment the "y" value by 1', function() {
    ball.moveBall();
    assert.equal(ball.y, 12);
});

  it('should have a method called "canvasBoundaries()"', function() {
    assert.isFunction(ball.canvasBoundaries);
});




});
});
