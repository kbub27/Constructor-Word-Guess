var inq = require('inquirer');
var Word = require('./word.js');
//SET UP VARIABLES FOR GAME TO RUN ON
var wordArr = ['Green River', 'Melvins', 'Tad', 'Mother Love Bone', 'Temple Of The Dog', 'Mudhoney', 'Alice In Chains', 'Pearl Jam', 'Soundgarden', 'Nirvana'];
var guesses = [];
var guessesLeft = 10;
var choice;
var chosenWord;

//FUNCTION TO GRAB A RANDOM WORK
var randomWord = (wordArr) => {
    let i = Math.floor(Math.random() * wordArr.length);
    return wordArr[i];
};
//FUNCTION TO RESET THE GAME PARAMETERS
var reset = () => {
    chosenWord = randomWord(wordArr);
    choice = new Word(chosenWord);
    choice.guess(' ');
    guesses = [];
    guessesLeft = 10;
};
// FUNCTION TO RUN THE GAME
var runGame = () => {
    //LOG THE WORD IF YOU HAVE GUESSES AND YOU HAVENT GUESSED ALL THE LETTERS
    if (!choice.allDone() && guessesLeft > 0) {
        console.log(choice.array);
    };
    inq.prompt([
        {
            name: 'letter',
            type: 'input',
            message: 'Guess a letter',
            // validate: function (value) {
            //     if (value === 1 && (value /^[a-z]+$/)) {
            //         return 'Please enter a single letter'
            //     }
            // },
            // when: function () {
            //     return (guessesLeft > 0);
            // }
        },
        {
            name: 'again',
            type: 'confirm',
            message: 'Do you want to play again?',
            when: function () {
                return (guessesLeft <= 0);
            }
        }
    ]).then(function (answers) {
        console.log(answers);
        console.log(chosenWord);
        //END PROCESS IF THEY DONT WANT TO PLAY AGAIN
        if (!answers.again) {
            process.end;
        };
        // RESET THE GAME AND RE-RUN THE GAME IF THEY DO WANT TO PLAY AGAIN
        if (answers.again) {
            reset();
        };
        //IF THE ANSWER EXISTS STORE IT INOT A VARIABLE
        var currentLetter = answers.letter.toLowerCase();
        console.log(currentLetter);
        //IF YOU HAVENT ALREADY GUESSED THE LETTER STORE IT INTO A VARIABLE OR TELL THEM THEY HAVE ALREADY GUESSED THAT LETTER
        if (guesses.indexOf(currentLetter) === -1) {
            guesses.push(currentLetter);
            choice.guess(currentLetter);
            //IF THE CHOICE MADE DOES NOT MATCH A LETTER IN THE CURRENT WORD GUSSES--
            if (chosenWord.toLowerCase().indexOf(currentLetter) === -1) {
                guessesLeft--;
            } else {
                
            }
        } else {
            console.log('You have already guessed ' + currentLetter);
        }
        // IF THEY RUN OUT OF GUESSES SHOW THE CORRECT WORD ELSE SHOW THEM HOW MANY GUESSES THEY HAVE
        // ALSO SHOW THEM THE LETTERS THEY HAVE GUESSED SO FAR AS WELL
        if (!choice.allDone()) {
            if (guessesLeft < 1) {
                console.log('You have no more remaining guesses!');
                console.log(chosenWord + ' was  the word you were looking for!');
            } else {
                console.log('You have ' + guessesLeft + ' remaining!');
                console.log('You have guessed- ' + guesses.join(' ') + ' -so far!');
            }
        } else {
            console.log('Great job! ' + chosenWord + ' was the correct word!');
            console.log(choice.allDone());
        };

        runGame();
    });
};
reset();
runGame();