const http = require("node:http");

http
  .createServer((req, res) => {
    // res.end(req.url);
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Home page");
    } else if (req.url === "/about") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("About page");
    } else if (req.url === "/apii") {
      res.writeHead(200, { "Content-Type": "applicatin/json" });
      res.end(
        JSON.stringify({
          fname: "hello",
          lname: "hey",
        })
      );
    } else {
      res.writeHead(400);
      res.end("Page not found");
    }
  })
  .listen(8080, function () {
    console.log("Welcome to http routing");
  });
