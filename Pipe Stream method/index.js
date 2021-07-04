// stream.pipe() connect readable stream with writable stream

const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    //data utha ray han
    const rs = fs.createReadStream("input.txt");
    //res man add karwa ray han
    rs.pipe(res);

});

server.listen(8001, "127.0.0.1", () => {
    console.log("Listening.........")
})

