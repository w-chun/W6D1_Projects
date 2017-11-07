const GameView = require('./game_view.js');
const Game = require('./game.js');

document.addEventListener("DOMContentLoaded", function() {
  let ctx = document.getElementById('canvas');
  ctx.getContext = ('2d');
  let game = new Game;
  let newGame = new GameView(game, ctx);
  newGame.start();
});
