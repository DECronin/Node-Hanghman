// Contains a constructor, Letter. This constructor should be able to either display an underlying character 
//or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. 
//That means the constructor should define:

// A string value to store the underlying character for the letter

// A boolean value that stores whether that letter has been guessed yet

// A function that returns the underlying character if the letter has been guessed, 
//or a placeholder (like an underscore) if the letter has not been guessed

// A function that takes a character as an argument and checks it against the underlying character, 
//updating the stored boolean value to true if it was guessed correctly

//should not require any other files.

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
// recieve guess, incorrects and word
// compare guess to word
// return new strings of display, incorrects and decremented guess value(0v1?)


// var string letter\
// var boolean hasBeenGuessed
// func () return letter-display if true else "_"
/////////////////// space === space so that strings will only compare letters but still qualify with spaces
// func (letter) check to underlying word's letters ~~~ updating boolean value if correctly guessed 