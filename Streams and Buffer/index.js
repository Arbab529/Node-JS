//#21: Streams and Buffer in Node JS with Example | Readable & Writable Streams in Node.JS
// ----------------------------------------------------------------------------------------

const { Readable, Writable, Duplex } = require("stream");

// listening to music and watching videos in realtime instead of downloading file and watching it later.

// 4 type of streams

// Readable
// Writable
// Duplex
// Transform output based on input


// each type stream is an EventEmitter instance.

// data 
// end 
// error 
// finish


const fs = require('fs');
const http = require('http');
const { RSA_NO_PADDING } = require("constants");

const server = http.createServer();
server.on('request', (req, res) => {

    //Without Streaming
    // fs.readFile("input.txt", "utf-8", (err, data) => {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         res.end(data);
    //     }
    // });


    //Streaming Data
    const readstream = fs.createReadStream("input.txt");
    readstream.on('data', (chunk) => {
        res.write(chunk);
    });
    readstream.on('end', () => {
        res.end();
    });
    readstream.on('error', (err) => {
        console.log(err);
        res.end("File Not Found");
    });

});

server.listen(8000, "127.0.0.1", () => {
    console.log("Listening.........")
})
