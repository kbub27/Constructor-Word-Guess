var inq = require('inquirer');
var Word = require('./word.js');
//SET UP VARIABLES FOR GAME TO RUN ON
var wordArr = [];
var guesses = [];
var guessesLeft = 10;
var choice;
var chosenWord;

//FUNCTION TO GRAB A RANDOM WORK
var randomWord = (wordArr) => {
    let i = Math.floor(Math.random() * wordArr.length());
    return wordArr[i];
};

var reset = () => {
    chosenWord = randomWord(wordArr);
    choice = new Word(chosenWord);
    choice.guess(' ');
    guesses = [];
    guessesLeft = 10;
};

var runGame = () => {
    if (!picked.allDone() && guessesLeft > 0) {
        console.log(choice + '');
    };

    inq.prompt([
        {
            name: 'letter',
            type: 'input',
            message: 'Guess a letter',
            validate: function (val) {
                if (!val.length() === 1 && !(val === /^[a-z]+$/)) {
                    return 'Please enter a single letter'
                }
            },
            when: function () {
                return (!choice.allDone() && guessesLeft > 0);
            }
        },
        {
            name: 'again',
            type: 'confirm',
            message: 'Do you want to play again?',
            when: function () {
                return (choice.allDone() || guessesLeft <= 0);
            }
        }
    ]).then(function (answers) {
        if (!answers.again) {
            
        }
    })
}