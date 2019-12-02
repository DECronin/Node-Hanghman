// The file containing the logic for the course of the game, which depends on Word.js and:
// Randomly selects a word and uses the Word constructor to store it
// Prompts the user for each guess and keeps track of the user's remaining guesses


const Word = require('./word');
const inquirer = require('inquirer');
const words = [];

let guestcount = 8;

function roundWord(i){
    if(i < words.length){
        
        roundWord(i++);
    } else {
        endGame();
    }
}

function startGame(){   
    shuffle(words)
    roundWord(0);
}

function endGame(){
    console.log(`~!~ Game Over ~!~`)
}

startGame();
// create word array
//count number of guesses
//retrieve random word from array
//////// send word to contstructor for display and comparisons
/////////////display word in blanks ==== from letters?
//////////////retrieve guess
////////////compare guess
////////////display and decrement gueses count(?)
//update display and count with each guess (count in letters func?)
//new word/round when no more blanks or guesscount hits 0
//new game when all words in array have commenced
/////////// offer new game retrieval?
/////////// hint extention?
/////////// exit game option?