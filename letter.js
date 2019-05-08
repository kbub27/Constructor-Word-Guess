class Letter {
    constructor(char) {
        this.char = char,
        //STORE GUESSED VALUE
        this.guessed = false,
        //FUNCTION TO RETURN LETTER IF GUESSED OR PLACEHOLDER IF NOT GUESSED
        this.toString = function () {
            if (!this.guessed) {
                this.char = '_'
            };
        },

        this.guess = function (guess) {
            if (this.char.toLowerCase() === guess.toLowerCase()) {
                this.guessed = true;    
            };
        }
    }
};

module.exports = Letter;