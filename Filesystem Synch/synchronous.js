// mkdir (directory name)

// create file using terminal of VS code 
// use (type nul > index.js)

//Move into REPL
// use (node)

// do
// ... {
// ... x++;
// ... console.log(`${x}`);
// ... }while(x<5);


// use (_) to view last result
//  suppose last result = 20
// (_ + 5) =25



////// (#5: Mastering the Node.js Core Modules | File System Node.js Module in Hindi in 2020)
// const name = "Arbab";
// console.log(name);


// ---------------- Import FileSystem Module -------------
const fs = require("fs");

// synsconous --> do customer ay pahlay na order diya jub tuk us ka order ready or serve nahi ho jata dosray ka process start nahi ho ga

// ------------ Create File -------------------

// fs.writeFileSync("read.txt", "Welcome Arbab"); //create File and add this data

// ------------ Update File -------------------

// fs.writeFileSync("read.txt", "Welcome Arbab! How Are You"); // Update data of existing file

// ------------ Append Data to the File -------------------

// fs.appendFileSync("read.txt", "I am appendind this data to the file")

// ------------ Read File (using encoding Standard)-------------------

// const buf_data = fs.readFileSync("read.txt", "utf-8");
// console.log(buf_data);

// ------------ Read File (convert to string) --------------

// const buf_data = fs.readFileSync("read.txt");
// console.log(buf_data.toString());

// ---------- Rename File ----------------

// fs.renameSync("read.txt", "readwrite.txt");

// ---------- Read Data from Existing file and write Into Another File ----------------
// const readdata = fs.readFileSync("readwrite.txt", "utf-8");
// fs.writeFileSync("fetched.txt", readdata);


