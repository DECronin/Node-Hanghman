class Letter {
    constructor (letter) {
        this.char = letter.toUpperCase();
        this.pastGuess = false;
    }
    display(){
        if(this.char === " "){
            return " "
        } else if (this.pastGuess == true){
            return ` ${this.char}`
        } else {
            return " _" 
        }
    }
    comparison(guess){
        (guess === this.char || this.char === " ") ? this.pastGuess = true : '';
    }
}

module.exports = Letter
