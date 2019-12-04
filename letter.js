class Letter {
    constructor (letter) {
        this.char = letter.toUpperCase();
        this.pastGuess = false;
    }
    display(){
        switch (this){
            case this.char === " ": return " "; break;
            case this.pastGuess: return this.char; break;
            default: return "_"        }
    }
    comparison(guess){
        (guess === this.char || this.char === " ") ? this.pastGuess = true : '';
    }
}

module.exports = Letter
