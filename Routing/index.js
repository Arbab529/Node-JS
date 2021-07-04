const http = require('http');
// const url = require('url');
const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.end("Hey! I am Response");
    } else if (req.url == "/about") {
        res.end("Hey! I am About us Page");
    }
    else if (req.url == "/userapi") {
        res.write("Hello from USER API");
        res.end();
    } else {
        res.writeHead(404, { "content-type": "text/html" });
        res.end("<h1>404: Page Not Found</h1>");
    }
})

server.listen(8001, "127.0.0.1", () => {
    console.log("I am API Server");
})