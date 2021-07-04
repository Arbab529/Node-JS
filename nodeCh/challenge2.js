// Node.JS Challenge #2: Asynchronous CRUD Operations using File System Modules in NodeJS

const fs = require("fs");

//create

// fs.mkdir("Challenge2",
//     (error) => {
//         console.log("done");
//     }
// )

// fs.writeFile("Challenge2/bio.txt", "Hello Arbab!",
//     (error) => {
//         console.log("Done");
//     }
// )

//Update or Append

// fs.appendFile("Challenge2/bio.txt", "\nKiya hal ha jnab!",
//     (error) => {
//         console.log("Done");
//     }
// )

//Read

// fs.readFile("Challenge2/bio.txt", "utf-8",
//     (error, data) => {
//         console.log("===== File Data ===== \n" + data);
//         if (error) {
//             console.log(error);
//         }
//         console.log("=====================")
//     }
// )

//Delete

// fs.unlink("Challenge2/bio.txt",
//     (error) => {
//         if (error) {
//             console.log(error);
//         }
//     }
// )