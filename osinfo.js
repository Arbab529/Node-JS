const os = require("os");

console.log("Host Name => " + os.hostname() + "\nArchitecture => " + os.arch());

const memory = os.freemem();
console.log(`Free Memory = > ${memory / 1024 / 1024 / 1024} GB`);


const totalmemory = os.totalmem();
console.log(`Total Memory = > ${totalmemory / 1024 / 1024 / 1024} GB`);

