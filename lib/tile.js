var Tile = function(options) {
  this.x = options.x;
  this.y = options.y || 10;
  this.width = options.width || 50;
  this.height = options.height || 20;
  this.ctx = options.ctx;
  this.canvas = options.canvas;
  this.visible = true;
}

Tile.prototype.buildTile = function() {
  this.ctx.fillRect(this.x, this.y, this.width, this.height)
}

Tile.prototype.removeTile = function() {
  this.visible = false
  this.x = -1000;
}

module.exports = Tile;
