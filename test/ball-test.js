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
    directionX: 1,
    directionY: 1,
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

  it('"changeDirectionY()" should reverse the"y" value', function() {
  ball.changeDirectionY();
  assert.equal(ball.directionY, -1);
});

//   it('"moveBall()" add the values of "x" and "directionX"', function() {
//     assert.equal(ball.left, 12);
// });
//
//   it('"moveBall()" should add the values of "y" and "directionY"', function() {
//     assert.equal(ball.top, 12);
//   });
//
//   it('"moveBall()" should add the values of "x", "width" and "directionY"', function () {
//     assert.equal(ball.right, 32);
//   });
//
//   it('"moveBall" should add the values of "y", "height" and "directionY"', function () {
//     assert.equal(ball.bottom, 32);
//   });

  it('should have a method called "canvasBoundaries()"', function() {
    assert.isFunction(ball.canvasBoundaries);
});

//   it('"canvasBoundaries" should check the if conditionals and return true/false', function() {
//   var ball = new Ball({x: 25, y: 10, canvas: 200});
//   console.log(ball.canvasBoundaries());
//   assert.equal(ball.canvasBoundaries, false);
//   assert.equal(ball.canvasBoundaries, false);
// })
});
});
