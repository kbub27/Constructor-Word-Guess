var Letter = require('./letter.js');

class Word {
    constructor(word) {
        //CREATE EMPTY ARRAY TO STORE LETTERS OF A WORD IN
        this.letters = word.split("").map(function(char) {
            return new Letter(char);
          });
        //FUNCTION TO RETURN A STRING FOR THE WORD 
        this.toString = function () {
            return this.array.join(' ');
        },
        //A GUESS FUNCTION CALLING THE LETTER.JS GUESS FUNCTION
        this.guess = function (letterGuess) {
            this.letters.forEach(element => {
                element.guess(letterGuess);
            });
        },
        //CHECK IF ALL LETTERS ARE GUESSED 
        //DONT QUITE KNOW HOW THIS WORKS GOT IT FROM STACK OVERFLOW
        this.allDone = function () {
            return this.letters.every((currentValue) => currentValue.guessed);
        }

    }
};

module.exports = Word;