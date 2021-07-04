// #18: Complete JSON in Node JS
// JSON --> Javascript Object Notation
// Use to store and transport data


const bioData = {
    name: "Arbab",
    age: 21
}
// console.log(bioData.name);

// Two methods of JSON
//1- parse (Json to Boject)
//2- stringify ( object to JSON)



// const JSONData = JSON.stringify(bioData);
// console.log(JSONData);
// const objdata = JSON.parse(JSONData);
// console.log(objdata);


// ------------------------
// Task
// ------------------------

// convert object to JSON
// store JSON data in another File
// read JSON data
// convert back to object from JSON
// show on console

const fs = require('fs');

// const jsondata = JSON.stringify(bioData);

// fs.writeFile('./jsonfile.json', jsondata, (err) => {
//     console.log("File Created");
// })

fs.readFile('./jsonfile.json', "utf-8", (err, data) => {
    if (err) {
        console.log("Error");
    } else {
        // console.log("JSON data = > " + data);
        const originaldata = JSON.parse(data);
        console.log("JSON Data => ", data);
        console.log("OBJECT Data => ", originaldata);
    }
})


