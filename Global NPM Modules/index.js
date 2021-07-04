// #14: Nodemon in Node.JS | Import Global NPM Module in Node JS

// cmnd (npm i nodmon -g)
// run nodemon like your live server cmnd (nodemon filename)

const chalk = require('chalk');
const validator = require('validator');

const res = validator.isEmail("arbab@asa.com");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));