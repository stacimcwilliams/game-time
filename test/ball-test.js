const chai = require('chai');
const assert = chai.assert;

const Ball = require('../lib/ball');

describe('Ball', function() {
  context('default', function(){
  var ball = new Ball({
    x: 10,
    y: 10,
    width: 20,
    height: 20,
    directionX: 1,
    directionY: 1,
    canvas:{width:200},
});
  it('should have a function "ball"', function() {
  assert.isFunction(Ball);
});

  it('should instantiate our friend Ball', function() {
  assert.isObject(ball);
});

  it('should have a method called "changeDirectionX()"', function (){
    assert.isFunction(ball.changeDirectionX);
});

  it('should have a method called "changeDirectionY()"', function (){
  assert.isFunction(ball.changeDirectionY);
});

  it('"changeDirectionX()" should reverse the "x" value', function (){
  ball.changeDirectionX();
  assert.equal(ball.directionX, -1);
});

  it('"changeDirectionY()" should reverse the "y" value', function() {
  ball.changeDirectionY();
  assert.equal(ball.directionY, -1);
});

  it('should have a method called "canvasBoundaries()"', function() {
    assert.isFunction(ball.canvasBoundaries);
});

  it('"canvasBoundaries()" should reverse directionX if "x" is less than 0', function () {
    var ball = new Ball({x:-1, y:1, width:20, height:20, canvas: 200, directionX: -2.5});
    ball.canvasBoundaries();
    assert.equal(ball.directionX, 2.5);
});

  it('"canvasBoundaries()" should reverse directionY if "y" is less than 0', function () {
    var ball = new Ball({x:1, y:-1, width:20, height:20, canvas: 200, directionY: -2.5});
    ball.canvasBoundaries();
    assert.equal(ball.directionY, 2.5);
});

  it('"canvasBoundaries()" should reverse directionX if "x" is more than (canvas width - ball width)', function() {
    var ball = new Ball({x:181, width:20, canvas:{width:200},directionX:-2.5});
    ball.canvasBoundaries();
    assert.equal(ball.directionX, 2.5);
});

});
});
