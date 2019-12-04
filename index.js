const Word = require('./word');
const inquirer = require('inquirer');
const words = ["dog", 'cat', 'horse', 'snake', 'squirel', 'bird', 'fish'];
// const letters = /^[A-Za-z]+$/;
let guestcount = 8;

function roundWord(i){
    if(i < words.length){
        let newWord = new Word(words[i]);
        newWord.toArray();
        letterPlay(newWord, i);
    } else {
        endGame();
    }
}

function letterPlay(w, i){
    console.log(`Current Word:\n${w.displayString()}\n\nRemaining Guesses: ${guestcount}`);
    if(guestcount > 0){
        inquirer.prompt([{
            type: 'input',
            name: 'guess',
            message: 'Type your letter-guess:'
        }]).then(function(a){
            // console.log(letters)
            // if (letters.match(a)){
                a = a.guess.toUpperCase()
                w.validate(a);
                // w.includes(a) ? '' : guestcount--;
            // } else {
                // console.log(`Please provide a valid character from the English Alphabet.`);
            // }
            console.log(w);
            letterPlay(w)
        })
    } else {
        guestcount = 8;
        console.log(`Your word was: ${w.word}`);
        roundWord(i++);
    }
}

function startGame(){   
    shuffle(words, words.length);
    console.log(words);
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