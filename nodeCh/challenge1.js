// V6 --> Node.JS Challenge #1: CRUD Operations using FS Module in NodeJS

// Import Module
const fs = require("fs");

// ----------------------------
// CRUD Operation In Node JS
// -----------------------------

//Create Folder
// fs.mkdirSync("Challenge1")

// create File
// fs.writeFileSync("Challenge1/bio.txt", "Hello Arbab!");

//Update Append
// fs.appendFileSync("Challenge1/bio.txt", "\n This is CRUD Challenge");

//Read File
// const readdata = fs.readFileSync("Challenge1/bio.txt", "utf-8");
// console.log(readdata);

//Rename File
// fs.renameSync("Challenge1/bio.txt", "Challenge1/mybiofile.txt");

//Delete File
// fs.unlinkSync("Challenge1/mybiofile.txt");

//Delete Folder
// fs.rmdirSync("Challenge1");


fs.writeFile("challenge2.js", "abc", (error) => {
    console.log("File Created")
})

