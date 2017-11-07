/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const GameView = __webpack_require__(1);
const Game = __webpack_require__(2);

document.addEventListener("DOMContentLoaded", function() {
  let ctx = document.getElementById('canvas');
  ctx.getContext = ('2d');
  let game = new Game;
  let newGame = new GameView(game, ctx);
  newGame.start();
});


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const Game = __webpack_require__(2);

const GameView = function GameView (game, ctx) {
  this.game = game;
  this.ctx = ctx;
};

GameView.prototype.start = function start () {
  setInterval(this.game.moveObjects, 20);
  setInterval(this.game.draw, 20);
};

module.exports = GameView;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const Asteroid = __webpack_require__(4);



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


/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

const MovingObject = __webpack_require__(5);
const Util = __webpack_require__(6);

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


/***/ }),
/* 5 */
/***/ (function(module, exports) {

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


/***/ }),
/* 6 */
/***/ (function(module, exports) {

const Util = {
  inherits (childClass, parentClass) {
    function Surrogate () {}
    Surrogate.prototype = parentClass.prototype;
    childClass.prototype = new Surrogate ();
    childClass.prototype.constructor = childClass;
  },

  randomVec (length) {
    const deg = 2 * Math.PI * Math.random();
    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
  },

  // Scale the length of a vector by the given amount.
  scale (vec, m) {
    return [vec[0] * m, vec[1] * m];
  }
};


module.exports = Util;


/***/ })
/******/ ]);