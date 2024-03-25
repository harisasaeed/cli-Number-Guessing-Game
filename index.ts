#!/usr/bin/env node
console.log(chalk.bold.italic.green('Lets Guess the Number'))

import inquirer from "inquirer";
import chalk from "chalk"

// 1) computer will generate a random number 

// 2) user input for guessing number

// 3) compare user input with computer genereted  number  and show result

const randomNumber = Math.floor(Math.random() * 6 + 1);

const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-6:  ",
    }
]);
 if(answers.userGuessedNumber === randomNumber) {
console.log(`${chalk.italic.yellow("congratulations you won")}`)
 }else {
    console.log(`${chalk.bold.red("You Guess Wrong Number")}`)
 }