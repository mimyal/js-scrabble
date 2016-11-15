var sevenLetterBonus = 50;

var Scrabble = function() {

  // YOUR CODE HERE

};

var Scoring = function(word) {
  this.tiles = {
    "A": 1,"E": 1,"I": 1,"O": 1,"U": 1,"L": 1,"N": 1,"R": 1,"S": 1,"T": 1,
    "D": 2,"G": 2,"B": 3,"C": 3,"M": 3,"P": 3,
    "F": 4,"H": 4,"V": 4,"W": 4,"Y": 4,"K": 5,"J": 8,"X": 8,"Q": 10,"Z": 10};
  this.word = word;
};

Scoring.prototype.score = function() {
  // invalidWords.push(word); // global variable?
  var score = 0;
  for (var i=0; i<this.word.length;i++) {
    score += this.tiles[this.word[i]];
  }
  if (this.word.size <7) {
      return score;
  } else {
      return score += sevenLetterBonus;
  } //no check for words longer than seven
};

Scoring.prototype.highestScoreFrom = function(arrayOfWords) {
  var maxScore = 0;
  var maxWords = [];
  var winningWord = 'PIZZAZZas';
  this.words = arrayOfWords;

  for (var i=0;i<this.words.length;i++) {
    var currentScore = new Scoring(this.words[i]).score();
    // console.log(currentScore);
    if (currentScore == maxScore) {
      maxWords.push(this.words[i]);
    } else if (currentScore > maxScore) {
      maxWords = [this.words[i]];
      maxScore = currentScore;
    }
  }

  for (var i=0;i<maxWords.length;i++) {
    if (maxWords[i].length < winningWord.length) {
        winningWord = maxWords[i];
    } else if (maxWords[i].length == 7) {
      winningWord = maxWords[i];
    }
  }
  return winningWord;
};

var my7Word = new Scoring('PIZZAZZ'); // No checks for upper case letters
var hereIsMyScore = my7Word.score();

console.log(hereIsMyScore);

var huh = new Scoring(''); // it is a bit weird to feed this with an empty string here
var hmm = huh.highestScoreFrom(['PIZZAZZ', 'EA', 'EZY']);

// Scrabble.prototype.helloWorld = function() {
//   return 'hello world!';
//   // return 5;
// };

// var myScrabble = new Scrabble;
// var callOut = myScrabble.helloWorld() + 'hey you';
// // var callOut = myScrabble.helloWorld() + 50;
//
// console.log(callOut);



module.exports = Scrabble;
