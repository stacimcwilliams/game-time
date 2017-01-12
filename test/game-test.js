const chai = require('chai');
const assert = chai.assert;

const Game = require('../lib/game');
const Ball = require('../lib/ball');
const Paddle = require('../lib/paddle');
const Tile = require('../lib/tile');

describe('Game', function() {
    context('default', function() {
      var game = new Game({
        context: {},
        canvas: {width:500},
        width: 10,
        height: 10,
        y: 10,
      });
  it('should have a function "game"', function() {
    assert.isFunction(Game);
  });

  it('should instantiate Game', function() {
    assert.isObject(game);
  });

  it('should have a method called "buildGame"', function() {
    assert.isFunction(game.buildGame);
  });

  it('should have a method called "makeTileArray"', function() {
    assert.isFunction(game.makeTileArray);
  });

  // it('"makeTileArray" should return an array', function() {
  //   assert.isArray(game.makeTileArray);
  // });

  it('should have a method called ballTileCollision', function() {
    assert.isFunction(game.ballTileCollision);
  });

  it('"ballTileCollision" should reverse the directionY', function() {
    assert.equal(game.y, -10);
  })
});
});
