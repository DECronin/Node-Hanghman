const Word = require('./word');
const inquirer = require('inquirer');
const words = [];
const letters = /^[A-Za-z]+$/;
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
    console.log(`Current Word:\n${w.displayString()}\n\nRemaining Guesses: ${guestcount}`);
    if(guestcount > 0 && w.displayString().includes(`_`)){
        inquirer.prompt([{
            type: 'input',
            name: 'guess',
            message: 'Type your letter-guess:'
        }]).then(function(a){
            if (a.match(letters)){
                w.validate(a.toUpperCase());
                w.inclides(a.toUpperCase()) ? '' : guestcount--;
            } else {
                console.log(`Please provide a valid character from the English Alphabet.`);
            }
            letterPlay(w)
        })
    } else {
        guestcount = 8;
        console.log(`Your word was: ${w.word}`);
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