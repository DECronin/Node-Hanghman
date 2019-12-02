class Letter {
    constructor (letter) {
        this.char = letter;
        this.pastGuess = false;
    }
    display(){
        switch (this){
            case this.char === " ": return " "; break;
            case this.pastGuess: return this.char; break;
            default: return "_"        }
    }
    comparison(guess){
        if (guess === this.char || this.char === " ") {this.pastGuess = true}
    }
}

module.exports = Letter
