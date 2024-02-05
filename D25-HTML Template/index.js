const http = require("node:http");
const fs = require("node:fs");

// NOTE:
// Through html template you can replace the work which
// is inside the html file.

http
  .createServer((req, res) => {
    const name = "Javascript";
    res.writeHead(200, { "Content-Type": "text/html" });
    let html = fs.readFileSync("./index.html", "utf-8");
    html = html.replace("html template", name);
    res.end(html);
  })
  .listen(8080, function () {
    console.log("Server has to be run");
  });
