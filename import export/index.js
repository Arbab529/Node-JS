
// const oper = require("./operator");  //operator module kuch na kuch return karta ha to usay ak variable man store karwa layn gay
// console.log("Addition => " + oper.addoper(5, 5));
// console.log("Subtraction => " + oper.suboper(10, 5));


//Object Destructuring
// const { addoper, suboper, muloper } = require("./operator");
// console.log("Addition => " + addoper(5, 5));
// console.log("Subtraction => " + suboper(10, 5));
// console.log("Multiplication => " + muloper(10, 5));

//Module Object Destructuring
const { add, sub, mul, name } = require("./operator");
console.log("Addition => " + add(5, 5));
console.log("Subtraction => " + sub(10, 5));
console.log("Multiplication => " + mul(10, 5));
console.log("Name => " + name);