const Game = require('./game.js');

const GameView = function GameView (game, ctx) {
  this.game = game;
  this.ctx = ctx;
};

GameView.prototype.start = function start () {
  setInterval(this.game.moveObjects, 20);
  setInterval(this.game.draw, 20);
};

module.exports = GameView;
