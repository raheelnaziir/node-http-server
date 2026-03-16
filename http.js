const http = require("http");
const fs = require("fs")

const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end("<h1><b>Raheel here</b></h1> <p>Hey there Raheel is here doing something something</p>");


    if (req.url == "/about") {
        const data = fs.readFileSync("index.html");
        res.end(data.toString());
    }

})
