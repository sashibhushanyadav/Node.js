const http = require("node:http");

// NOTE:
// pm2 is a global package by using it we can execute the cluster module.
// about pm2 and its command line
// install: sudo npm install -g pmp2
// after installation: pm2 start no-cluster.js -i 0
// 0: indicates no. of workers in master of cluster.

http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "content-type": "text/plain" });
      res.end("Home Page");
    } else if (req.url === "/about") {
      for (let i = 0; i < 8000000000; i++) {}
      res.writeHead(200, { "content-type": "text/plain" });
      res.end("About Page");
    }
  })
  .listen(8001, () => {
    console.log("Welcome to http module");
  });
