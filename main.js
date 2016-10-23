var game = require("./game.js");
var wordCons = require("./word.js");
var letterCons = require("./letter.js");
var inquirer = require("inquirer");
var randomWord = game.randomWord;
var letterGuessed;
exports.letter;

var myWord = new wordCons.wordCons(game.randomWord);
var maxGuesses = 15;
function takeAGuess(){
    console.log('FINAL FANTASY X HANGMAN');
    console.log(myWord.toString());
    if (myWord.guessesMade.length >= maxGuesses){
        console.log('NO MORE GUESSES...SUCKS TO SUCK');
    return;
    }
    inquirer.prompt([{
        name: 'letter',
        type: 'text',
        message: 'Enter a letter:',
        validate: function(str){

            var regEx = new RegExp("^[a-zA-Z\s]{1,1}$");
            return regEx.test(str);
                }
        }]).then(function(letterInput){
                var letter = letterInput.letter; 
                //checks
                myWord.findLetter(letter);
                    //winner
                    if(myWord.isComplete()){ 
                    console.log('CONGRATS! It was ' + myWord.toString() + '. You live to see another day.');
                    return;
                    }
                console.log('-------------------\n');
                console.log((maxGuesses - myWord.guessesMade.length) + ' MORE TRIES UNTIL YOUR ULTIMATE DEMISE.');
                console.log('-------------------\n');
                takeAGuess();
                }
  );
}
takeAGuess();