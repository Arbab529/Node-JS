const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {

    const data = fs.readFileSync(`${__dirname}/userAPI/userapi.json`, "utf-8");
    const objdata = JSON.parse(data);
    if (req.url == "/") {
        res.end("Hey! I am Response");
    } else if (req.url == "/about") {
        res.end("Hey! I am About us Page");
    }
    else if (req.url == "/userapi") {
        res.writeHead(200, { "content-type": "application/json" });
        res.end(objdata[0].id + " " + objdata[0].name);
    } else {
        res.writeHead(404, { "content-type": "text/html" });
        res.end("<h1>404: Page Not Found</h1>");
    }
})

server.listen(8000, "127.0.0.1", () => {
    console.log("I am API Server");
})