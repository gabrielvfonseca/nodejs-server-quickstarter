
const http = require("http");
const fs = require("fs");
const port = 4000;

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.readFile("./index.html", (err, data) => {
            if(err) {
                res.writeHead(404); // 404 => not found
                res.write("Error: File not found");
            }
            else {
                res.write(data);
            }
            res.end();
        });
    }
});

server.listen(port, (error) => {
    if(error) {
        console.log("Error", error);
    }
    else {
        console.log(`Listening on port ${port}...`);
    }
});