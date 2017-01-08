var Tile = function(options) {
  this.x = options.x || 0;
  this.y = options.y || 0;
  this.width = options.width || 50;
  this.height = options.height || 20;
  this.ctx = options.ctx;
  this.canvas = options.canvas;
}


Tile.prototype.buildTile = function() {
  this.ctx.fillRect(this.x, this.y, this.width, this.height)
}

module.exports = Tile;
