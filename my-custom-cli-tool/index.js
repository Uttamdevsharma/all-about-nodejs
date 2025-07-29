#!/usr/bin/env node

//command line arguments (process.argv)
// const args = process.argv.slice(2);


// if(args.length === 0){
//     console.log("Usage this command: custom-cli-codetutor1-project <name>")
// } else {
//     console.log(`Hello, ${args[0]}! Welcome to the CLI tool`)
// }




//Interactive cli using readline
import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//ask question to user
rl.question("Whats your name ? \n", (name) =>{
    console.log(`Hello, ${name}`);
    rl.close();
})

