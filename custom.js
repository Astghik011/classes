// CustomConsole Class

// Create a CustomConsole class with following methods:

// log function that takes user arguments and returns them as a string,
// history function that takes an optional range as an argument,
// clearHistory function to remove the history memory.
// The log function has no limit of arguments.

// const myConsole = new Console('Regular'); 
// const fancyConsole = new Console('Fancy'); 

// myConsole.log([0, 1, 2, 3]) // "Regular: [0,1,2,3]" 
// myConsole.log({ a:1, b:2 }) // "Fancy: {a:1, b:2}" 
// myConsole.log("ok : ", 1, 2, 3) ➞ "ok : 1, 2, 3" 
// myConsole.clearHistory() // true 
// myConsole.history() // ""

class Console {
    constructor(design){
        this.design = design
        this.historyCleared = false
    }

    log(userArguments){
        let args = [...arguments]
        if(typeof userArguments === "object" ){
            return `${this.design}: ${JSON.stringify(userArguments)}`
        } else if(this.historyCleared === true){
            return ""
        }
        return args.join(", ")
    }

    history(){
        if(this.historyCleared === true){
            return ""
        }
        return this.log()
    }

    clearHistory(){
        return this.historyCleared = true
    }
}

const myConsole = new Console('Regular'); 
const fancyConsole = new Console('Fancy'); 

console.log(myConsole.log([0, 1, 2, 3])) // "Regular: [0,1,2,3]" 
console.log(fancyConsole.log({ a:1, b:2 })) // "Fancy: {a:1, b:2}" 
console.log(myConsole.log("ok : ", 1, 2, 3)) // ➞ "ok : 1, 2, 3" 
console.log(myConsole.clearHistory()) // true 
console.log(myConsole.history()) // ""