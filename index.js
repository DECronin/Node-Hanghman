const Word = require('./word');
const inquirer = require('inquirer');
const words = ["dog", 'cat', 'horse', 'snake', 'squirel', 'bird', 'fish'];
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let guestcount = 8;

function roundWord(i){
    if(i < words.length){
        console.log(`Round: ${i + 1}/${words.length}`);
        let newWord = new Word(words[i]);
        newWord.toArray();
        letterPlay(newWord, i);
    } else {
        endGame();
    }
}

function letterPlay(w, i){
    console.log(`Current Word:\n${w.displayString()}\n\nRemaining Guesses: ${guestcount}`);
    let full = '';
    w.word.forEach(e => {full += e.char});
    if(guestcount > 0 && w.displayString().match(' _')){
        inquirer.prompt([{
            type: 'input',
            name: 'guess',
            message: 'Type your letter-guess:'
        }]).then(function(a){
            a = a.guess.toUpperCase()
            if (letters.match(a)){
                w.validate(a);
                console.log(w);
                full.match(a) ? '' : guestcount--;
            } else {
                console.log(`\n~!~ Please provide a valid character from the English Alphabet ~!~\n`);
            }
            letterPlay(w, i)
        })
    } else {
        guestcount = 8;
        console.log(`Your word was: ${full}`);
        roundWord(i + 1);
    }
}

function startGame(){   
    shuffle(words, words.length);
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