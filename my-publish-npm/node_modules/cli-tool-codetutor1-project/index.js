#!/usr/bin/env node

//command line arguments (process.argv)
// const args = process.argv.slice(2);


// if(args.length === 0){
//     console.log("Usage this command: custom-cli-codetutor1-project <name>")
// } else {
//     console.log(`Hello, ${args[0]}! Welcome to the CLI tool`)
// }



//Interactive cli using readline
// import readline from "readline";

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// //ask question to user
// rl.question("Whats your name ? \n", (name) =>{
//     console.log(`Hello, ${name}`);
//     rl.close();
// })



import readline from "readline";
import chalk from "chalk";

// create readline interface
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// define questions
const questions = [
    {
        type: 'input',
        name: 'name',
        message: chalk.blue("What is your name?")
    },
    {
        type: 'input',
        name: "age",
        message: chalk.green("How old are you?"),
        validate: (value) => {
            if (!isNaN(parseInt(value)) && parseInt(value) >= 0) {
                return true;
            } else {
                return "Please give an integer value";
            }
        }
    },
    {
        type: "input",
        name: 'city',
        message: chalk.yellow("Where do you live?")
    },
    {
        type: "confirm",
        name: "agree",
        message: chalk.cyan("Do you agree to the above information? (yes/no)"),
        default: true
    }
];

const askQuestion = (index = 0, answers = {}) => {
    if (index >= questions.length) {
        console.log(chalk.green("\nHere is your Information: "));
        console.log(`Name: ${answers.name}`);
        console.log(`Age: ${answers.age}`);
        console.log(`City: ${answers.city}`);
        console.log(`Agreed: ${answers.agree ? chalk.green("Yes") : chalk.red("No")}`);
        r1.close();
        return;
    }

    const question = questions[index];

    r1.question(question.message + ' ', (answer) => {
        if (question.validate) {
            const validation = question.validate(answer);
            if (validation !== true) {
                console.log(chalk.red(validation));
                return askQuestion(index, answers); // keep existing answers
            }
        }

        if (question.type === 'confirm') {
            answers[question.name] = answer.toLowerCase().startsWith("y");
        } else {
            answers[question.name] = answer;
        }

        askQuestion(index + 1, answers);
    });
};

// start asking
askQuestion();
