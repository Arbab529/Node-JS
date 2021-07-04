// #13 Import NPM Module in Node.JS

// If you want to use NPM initilaize it in your project Folder
// using cmnd (npm init)

// go to npm website search for your npm pkg and install it in your project using terminal

//Chalk Package
const chalk = require('chalk');
// console.log(chalk.yellow("Arbab Anjum"));
// console.log(chalk.inverse("Arbab Anjum"));

//Validator Package
const validator = require('validator');

const res = validator.isEmail("arbab@asar.com");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));