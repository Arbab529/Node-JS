// #11 PATH Module In Node.JS in Hindi in 2020

const path = require("path");
console.log(path.dirname("D:/NodeJS/pathmodule.js"));
console.log(path.extname("D:/NodeJS/pathmodule.js"));
console.log(path.basename("D:/NodeJS/pathmodule.js"));

//Parsing

const fileparse = path.parse("D:/NodeJS/pathmodule.js");
console.log("File Name => " + fileparse.name);
console.log("Directory => " + fileparse.root);
console.log("Extension => " + fileparse.ext);


