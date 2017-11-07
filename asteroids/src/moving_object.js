function MovingObject (options) {
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
}

const mo = new MovingObject(
  { pos: [30, 30], vel: [10, 10], radius: 5, color: "#00FF00"}
);

MovingObject.prototype.draw = function draw (ctx) {
  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fillStyle = this.color;
};

MovingObject.prototype.move = function move() {
  [this.pos[0], this.pos[1]] = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
};

module.exports = MovingObject;
