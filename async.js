// #7: Node.JS Asynchronous File System Core Modules | Reading and Writing File Asynchronously

// --------------------------------

//do customer han ak ka order liya ja k chef ko bta diya wo ready kar ra ha itna man dosray customer ka order la liya

// app/client --> Request (API)  --> Server/Database
// app/client <-- Response (API) <-- Server/Database

//callback make a program async

// ------------------------------
// What is Callback Function?
// ------------------------------

// jub b function ko as a argument pass kartay han to wo call back hota ha


//We pass them a function as an argument - A callback-
// that gets called when task is completed
// the callback has an argument that tells you wheather
// the operation completed successfully or not.
// Now we need to say that to do when fs.writeFile has completed(even if it's nothin), and start checking for errors.



const fs = require("fs");

//Create File

// fs.writeFile("read.txt", "Writing Async Program Code",
//     (error) => {
//         console.log("File Created");
//     }
// );

//Update Or Append data to file
// fs.appendFile("read.txt", "\nAsynch Update file or Append data", (error) => {
//     console.log("Data Appended");
// })

//Read File
// fs.readFile("read.txt", "utf-8",
//     (error, Data) => {
//         console.log("File Data => " + Data);
//     }
// )

