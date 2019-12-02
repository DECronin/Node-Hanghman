// Contains a constructor, Word that depends on the Letter constructor. 
//This is used to create an object representing the current word the user is attempting to guess. 
//That means the constructor should define:

// An array of new Letter objects representing the letters of the underlying word

// A function that returns a string representing the word. This should call the function on each letter object 
//(the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.

// A function that takes a character as an argument and calls the guess function on each letter object 
//(the second function defined in Letter.js)

//should only require Letter.js

const letter = require('./letter');

class Word {
    constructor (currentWord) {
        this.word = currentWord;
    }
    display(){
        let temp = [];
        this.word.split('');
        for (let i = 0; i < this.word.length; i++) {
            temp.push(new Letter (this.word[i]));
        }
        this.word = temp
    }
}

module.exports = Word;
// retrieve letter
// var currentWord {
//    arracy = [new letter objects],
//    func() return string representing word display ~~ call function for each letter(first func in letters file),
//    func(guess) ~~ second function in letter file to see if correct or not}
