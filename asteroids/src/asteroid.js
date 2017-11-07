const MovingObject = require("./moving_object.js");
const Util = require("./util.js");

const DEFAULTS = {
  COLOR: 'blue',
  RADIUS: 25,
  SPEED: 4
};

const Asteroid = function Asteroid (options = {}) {
  options.color = DEFAULTS.COLOR;
  options.radius = DEFAULTS.RADIUS;
  options.vel = Util.randomVec(DEFAULTS.SPEED);

  MovingObject.call(this, options);
};

Util.inherits(Asteroid, MovingObject);


module.exports = Asteroid;
