const Letter = require('./letter');

class Word {
    constructor (currentWord) {
        this.word = currentWord;
    }
    toArray(){
        let temp = [];
        this.word.split('');
        for (let i = 0; i < this.word.length; i++) {
            temp.push(new Letter (this.word[i]));
        }
        this.word = temp
    }
    displayString(){
        let blanks = '';
        this.word.forEach(e => {
            blanks += (e.display());
        });
        return blanks;
    }
    validate(g){
        this.word.forEach(e => {
            e.comparison(g);
        });
    }
}

module.exports = Word;
