var Tile = function(options) {
  this.x = options.x || 0;
  this.y = options.y || 0;
  this.width = options.width || 50;
  this.height = options.height || 20;
  this.ctx = options.ctx;
  this.canvas = options.canvas;
  this.left = this.x;
  this.top = this.y;
  this.right = this.x + this.width;
  this.bottom = this.y + this.height;
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
