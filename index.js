// The file containing the logic for the course of the game, which depends on Word.js and:
// Randomly selects a word and uses the Word constructor to store it
// Prompts the user for each guess and keeps track of the user's remaining guesses


const Word = require('./word');
const inquirer = require('inquirer');
const words = [];

let guestcount = 8;

function roundWord(i){
    if(i < words.length){
        let newWord = new Word(words[i]);
        newWord.toArray();
        letterPlay(newWord);
        roundWord(i++);
    } else {
        endGame();
    }
}

function letterPlay(w){
    console.log(`${w.displayString()}`);
    if(guestcount > 0 && w.displayString().includes(`_`)){
        inquirer.prompt([{
            type: 'input',
            name: 'guess',
            message: 'Type your letter-guess:'
        }]).then(function(a){

        })
    } else {
        // display full word
        // check if all words have been done
            //next word
            //end game
    }
}

function startGame(){   
    shuffle(words, words.length - 1)
    roundWord(0);
}

function endGame(){
    console.log(`~!~ Game Over ~!~`)
}

function shuffle(a, i) {
    for (i > 0; i--;) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
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