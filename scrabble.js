
// SCORING

var Scoring = function() {
  this.tiles = {
    "A": 1,"E": 1,"I": 1,"O": 1,"U": 1,"L": 1,"N": 1,"R": 1,"S": 1,"T": 1,
    "D": 2,"G": 2,"B": 3,"C": 3,"M": 3,"P": 3,
    "F": 4,"H": 4,"V": 4,"W": 4,"Y": 4,"K": 5,"J": 8,"X": 8,"Q": 10,"Z": 10};
  this.sevenLetterBonus = 50;
};

Scoring.prototype.score = function(word) {
  // invalidWords.push(word); // global variable?
  this.word = (word.toUpperCase());
  var score = 0;
  for (var i=0; i<this.word.length;i++) {
    score += this.tiles[this.word[i]];
  }
  if (this.word.size <7) {
      return score;
  } else {
      return score += this.sevenLetterBonus;
  } //no check for words longer than seven
};

Scoring.prototype.highestScoreFrom = function(arrayOfWords) {
  var maxScore = 0;
  var maxWords = [];
  var winningWord = 'PIZZAZZas';
  this.words = arrayOfWords;

  for (var i=0;i<this.words.length;i++) {
    var currentScore = new Scoring().score(this.words[i]);
    // console.log(currentScore);
    if (currentScore == maxScore) {
      maxWords.push(this.words[i]);
    } else if (currentScore > maxScore) {
      maxWords = [this.words[i]];
      maxScore = currentScore;
    }
  }

  for (var j=0;j<maxWords.length;j++) {
    if (maxWords[j].length < winningWord.length) {
        winningWord = maxWords[j];
    } else if (maxWords[j].length == 7) {
      winningWord = maxWords[j];
    }
  }
  return winningWord;
};

var my7Word = new Scoring();
var hereIsMyScore = my7Word.score('PIZZAZZ');

console.log(hereIsMyScore);


var wordScoring = new Scoring();
var winWord = wordScoring.highestScoreFrom(['PIZZAZZ', 'EA', 'EZY']);
console.log(winWord);

// PLAYER
// =================

var Player = function(name) {
  this.name = name;
  this.wordsPlayed = [];
  this.score = 0;
  this.winner = false;
  this.tray = []; //implemented for TileBag @TODO use
};

Player.prototype.plays = function () {
  return this.wordsPlayed;
};

Player.prototype.play = function (word) {
  if (this.winner === true) {
    return false;
  }
  this.word = word;
  this.score = new Scoring().score(this.word);
  this.wordsPlayed.push(this.word);
  return this.score;
};

Player.prototype.totalScore = function () {
  var playerScore = 0;
  for (var i = 0; i < this.wordsPlayed.length; i++) {
    var word = this.wordsPlayed[i];
    var currentScore = new Scoring().score(word);
    playerScore += currentScore;
  }
  return playerScore;
};

Player.prototype.hasWon = function () {
  if (this.totalScore() >= 100) {
      return this.winner = true;
  } else {
      return this.winner = false;
  }
};

Player.prototype.highestScoringWord = function () {
  var bestWord = new Scoring().highestScoreFrom(this.wordsPlayed);
  return bestWord;
};

//highestWordScore(): Function which returns the highestScoringWord score
Player.prototype.highestWordScore = function () {
  var highestWord = this.highestScoringWord();
  return new Scoring().score(highestWord);
};


var player = new Player('Xerxes');
console.log(player.name);

var wordScore = player.play('PIZZAZZ');
console.log(wordScore);
console.log(player.name + ' is a winner? ' + player.hasWon());

var playerWords = ['PIZZAZZ', 'PIZZAZZ', 'PIZZAZZ'];
player.wordsPlayed = playerWords;
var totScore = player.totalScore();
console.log(totScore + ' points for player: ' + player.name);
console.log(player.name + ' is a winner? ' + player.hasWon());

var cat = new Player('Stellar');
var catWords = ['meoow','mjaoo','foood','oouut'];
cat.wordsPlayed = catWords;
console.log(cat.name + ' played ' + cat.highestScoringWord() + ' for ' + cat.highestWordScore() + ' points.');


// TILEBAG
// =================



module.exports = {
  Scoring: Scoring,
  Player: Player,
  TileBag: require('./tilebag')
};
