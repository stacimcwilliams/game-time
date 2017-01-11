const chai = require('chai');
const assert = chai.assert;

const Tile = require('../lib/tile');

describe('Tile', function() {
  context('default', function() {
  var tile = new Tile({
    x: 10,
    y:20,
    width: 20,
    height:20,
  });
  it('should have a function "tile"', function() {
    assert.isFunction(Tile);
  });

  it('should instantiate Tile', function() {
    assert.isObject(tile);
  });

  it('should have a method call "buildTile"', function() {
    assert.isFunction(tile.buildTile);
  });
});
});
