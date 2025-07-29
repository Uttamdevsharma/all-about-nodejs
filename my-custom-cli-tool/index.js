#!/usr/bin/env node

//command line arguments (process.argv)
const args = process.argv.slice(2);


if(args.length === 0){
    console.log("Usage this command: custom-cli-codetutor1-project <name>")
} else {
    console.log(`Hello, ${args[0]}! Welcome to the CLI tool`)
}

