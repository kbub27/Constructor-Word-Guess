var Letter = require('./letter.js');

class Word {
    constructor(string) {
        //CREATE EMPTY ARRAY TO STORE LETTERS OF A WORD IN
        this.array = [],
        //SPLIT THE STRING AND PUSH EACH LETTER INTO THE ARRAY
        string.split('').forEach(letter => {
            this.array.push(new Letter(letter));
        }),
        //FUNCTION TO RETURN A STRING FOR THE WORD 
        this.toString = function () {
            return this.array.join(' ');
        },
        //A GUESS FUNCTION CALLING THE LETTER.JS GUESS FUNCTION
        this.guess = function (letterGuess) {
            this.array.forEach(letter => {
                letter.guess(letterGuess);
            });
        },
        //CHECK IF ALL LETTERS ARE GUESSED 
        //DONT QUITE KNOW HOW THIS WORKS GOT IT FROM STACK OVERFLOW
        this.allDone = function () {
            return this.array.every((currentValue) => currentValue.guessed);
        }

    }
};

module.exports = Word;