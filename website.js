const http = require("http");
const fs = require("fs");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    console.log(req.url)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')

    if (req.url == "/") {
        res.statusCode = 200;
        const data = fs.readFileSync("index.html");
        res.end(data.toString());
    }
    else if (req.url == "/about") {
        res.end("<h1><b>Raheel here</b></h1> <p>Hey there Raheel is here doing something something</p>");
    }
    else {
        res.statusCode = 404;
        res.end("<h1>server not found</h1>");
    }

})

server.listen(port, () => {
    console.log("Server is listening on port", port);
});

