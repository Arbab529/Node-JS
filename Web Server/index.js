// What is Web server

// To access web pages of any web app, you need a web server. The web server will handle all the http requests for the web application.

// How to create Web Server

// The http.createServer() inculde req and res parameters.

//The request object can be used to get information about the current HTTP request
//e.g; url, request header, and data.

// The response object can be used to send a response for curent


//If the reponse from the HTTP  server is supposed to be displayed
//you should include an http header with the correct content type.



const http = require("http");
const server = http.createServer((req, res) => {
    res.end("Hello From Response Side");
})

//request ko listen karna ha k kiya request ai ha
server.listen(8000, "127.0.0.1", () => {
    console.log('Listening to the port 8000')
});