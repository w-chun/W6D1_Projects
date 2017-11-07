const Asteroid = require("./asteroid.js");



const DIM_X = 800;
const DIM_Y = 500;
const NUM_ASTEROIDS = 10;

const Game = function Game () {
  this.dim_x = DIM_X;
  this.dim_y = DIM_Y;
  this.num_asteroids = NUM_ASTEROIDS;
  const asteroid = Game.prototype.addAsteroids();
};

Game.prototype.addAsteroids = function addAsteroids() {
  let asteroids = [];
  for (var i = 0; i < Game.num_asteroids; i++) {
    asteroids.push(new Asteroid( {pos: [30 * i, 30 * i]}));
  }
  return asteroids;
};

// Game.prototype.randomPosition = function randomPosition() {
//
// }

Game.prototype.draw = function draw (ctx) {
  ctx.clearRect(0,0,DIM_X, DIM_Y);
  this.asteroid.forEach(el => {
    el.draw(ctx);
  });
};

Game.prototype.moveObjects = function moveObjects () {
  this.asteroid.forEach(el => {
    el.move();
  });
};


module.exports = Game;
