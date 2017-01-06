const chai = require('chai');
const assert = chai.assert;

const Ball = require('../lib/ball');

describe('Ball', function() {

it('should have a function "ball"', function() {
  var ball = new Ball()
  assert.isFunction(Ball);
})
})
