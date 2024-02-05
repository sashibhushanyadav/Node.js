const http = require("node:http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Hello Sashi</h1>");
  })
  .listen(5500, () => {
    console.log("it works");
  });

//   OR
const httpp = require("node:http");
const fs = require("node:fs");

httpp
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/index.html").pipe(res);
    // const html = fs.readFileSync("./index.html", "utf-8");
    // res.end(html);
  })
  .listen(5550, function () {
    console.log("This is also work");
  });
