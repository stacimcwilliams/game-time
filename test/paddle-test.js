const chai = require('chai');
const assert = chai.assert;

const Paddle = require('../lib/paddle');

describe('Paddle', function() {
  context('default', function(){
  var paddle = new Paddle({
    x: 20,
    y: 20,
  });

  it('should have a function "paddle"', function() {
    assert.isFunction(Paddle);
  });

  it('should instantiate Paddle', function() {
    assert.isObject(paddle);
  });

  it('should have a method called "movePaddle"', function() {
    assert.isFunction(paddle.movePaddle);
  });

  it('"movePaddle" should move the paddle to the left or right', function(rightPressed) {
    this.timeout(5000);
    var paddle = new Paddle({x:20, y:20});
    assert.equal(paddle.x, 20);

    // paddle.movePaddle();
    // assert.equal(paddle.x, 10);
  });

  it('"movePaddle" should move the paddle to the left or right', function(rightPressed,leftPressed) {
    // paddle.movePaddle(leftPressed);
    assert.equal(paddle.x, 30);
  });
});
});
