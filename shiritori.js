// Shiritori

// This challenge is an English twist on the Japanese word game Shiritori. 
// The basic premise is to follow two rules:

// First character of next word must match last character of previous word.
// The word must not have already been said.

// Below is an example of a Shiritori game:
// ["word", "dowry", "yodel", "leader", "righteous", "serpent"]; // valid! 
// ["motive", "beach"]; // invalid! - beach should start with "e" 
// ["hive", "eh", "hive"]; // invalid! - "hive" has already been said

// Write a Shiritori class that has two instance properties:
// words: an array of words already said.
// game_over: a boolean that is true if the game is over.
// Methods:
// play: a method that takes in a word as an argument and checks if it is valid (the word should follow
// rules #1 and #2 above).
// If it is valid, it adds the word to the words array, and returns the words array.
// If it is invalid (either rule is broken), it returns "game over" and sets the game_over boolean to
// true.
// restart: a method that sets the words array to an empty one [] and sets the game_over boolean
// to false. It should return "game restarted".
// Examples:
// myShiritori = new Shiritory(); 
// myShiritori.play("apple"); // ["apple"] 
// myShiritori.play("ear"); // ["apple", "ear"] 
// myShiritori.play("rhino"); // ["apple", "ear", "rhino"] 
// myShiritori.play("corn"); // "game over"
// // Corn does not start with an "o". 
// myShiritori.words; // ["apple", "ear", "rhino"]
// // Words should be accessible. 
// myShiritori.restart(); // "game restarted" 
// myShiritori.words; // []

// // Words array should be set back to empty. 
// myShiritori.play("hostess"); // ["hostess"] 
// myShiritori.play("stash"); // ["hostess", "stash"] 
// myShiritori.play("hostess"); // "game over"
// IMPORTANT Words cannot have already been said.
// The play method should not add an invalid word to the words array.
// You don't need to worry about capitalization or white spaces for the inputs for the play method. There
// will only be single inputs for the play method.

class Shiritori {
    constructor (){
        this.words = [];
        this.game_over = false
    }

    play(word){

        let copiedWords = [...this.words]
        if(!this.words.length && word){
            this.words.push(word)
        } else if(typeof word === "undefined"){
            return 
        } else{
            let currentItem = copiedWords.pop();
            let lastLetter = currentItem.slice(-1);
            let firstLetter = word[0]
            let same = false

            for(let everyWord of this.words){
                if(everyWord === word){
                    same = true
                }
            }

            if(firstLetter === lastLetter && !same){
                this.words.push(word)
            } else if(firstLetter === lastLetter && same){
                this.game_over = true
                return `Game over. "${word}" has already been said.`
            } else {
                this.game_over = true
                let vowels = /[^$v] || [^rfhlmnrsx]/
                this.words = []
                if(vowels.test(lastLetter)){
                    return `Game over. "${word}" doesn't start with an "${lastLetter}".`
                }else{
                    return `Game over. "${word}" doesn't start with a "${lastLetter}".`
                }
            } 
        }
        return this.words
    }

    restart(){
        this.game_over = false
        this.words = []
        this.play()
        return "Game restarted." 
    }
}
const myShiritori = new Shiritori()

// Example 1

console.log(myShiritori.play("apple")); // ["apple"] 
console.log(myShiritori.play("ear")); // ["apple", "ear"] 
console.log(myShiritori.play("piano")); // ["apple", "ear", "rhino"] 
console.log(myShiritori.play("corn")); // "game over"
// Corn does not start with an "o". 
console.log(myShiritori.words); // ["apple", "ear", "rhino"]
// // Words should be accessible. 
console.log(myShiritori.restart()); // "game restarted" 


// Example 2

console.log(myShiritori.play("hostess")); // ["hostess"] 
console.log(myShiritori.play("stash")); // ["hostess", "stash"] 
console.log(myShiritori.play("hostess")); // "game over"
