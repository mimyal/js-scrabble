var Scrabble = require('./scrabble');

var TileBag = function() {
  this.bag = [
    "D","L","S","U","D","L","S","U","D","L","S",
    "U","D","L","S","U","G","G","G","Q","J","K",
    "X","Z","M","B","C","F","H","V","W","Y","P",
    "M","B","C","F","H","V","W","Y","P","E","E",
    "E","E","E","E","E","E","E","E","E","E","I",
    "I","I","I","I","I","I","I","I","O","O","O",
    "O","O","O","O","O","R","R","R","R","R","R",
    "T","T","T","T","T","T","N","N","N","N","N","N"];
  this.gameBag = this.bag.slice();
};

TileBag.prototype.shuffle = function() {
   for (let i = this.bag.length; i; i--){
       let j = Math.floor(Math.random() * i);
       [this.bag[i - 1], this.bag[j]] = [this.bag[j], this.bag[i - 1]];
   }
   return this.bag;
};

TileBag.prototype.drawTiles = function (num) {
  var letters = [];
  var sumOfAllTiles = this.bag.length;
  if (num > 7) {
    console.log('The player can max carry seven letters');
    num = 7;
  }
  if (num > sumOfAllTiles) {
    num = sumOfAllTiles;
    console.log('Only ' + num + ' are left in the bag, and you get all these tiles.');
  }
  for (var i=0;i<num;i++) {
    var gameBag = this.shuffle();
    letters.push(gameBag.pop());
  }
    return letters;
};

var blackbox = new TileBag();
blackbox.shuffle();
// console.log(blackbox.bag);


var letters = blackbox.drawTiles(20);
console.log(letters);
// blackbox
blackbox.drawTiles(7);
blackbox.drawTiles(7);
blackbox.drawTiles(7);
blackbox.drawTiles(7);
blackbox.drawTiles(7);
blackbox.drawTiles(7);
blackbox.drawTiles(7);
blackbox.drawTiles(7);
blackbox.drawTiles(7);
blackbox.drawTiles(7);
blackbox.drawTiles(7);
var lastLetters = blackbox.drawTiles(7);
console.log(lastLetters);
console.log('The blackbox.bag is empty: [' + blackbox.bag + ']');

new Scrabble.Player();
