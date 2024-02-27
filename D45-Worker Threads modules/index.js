const http = require("node:http");
const { Worker } = require("node:worker_threads");

http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "content-type": "text/plain" });
      res.end("Home pge");
    } else if (req.url === "/slow-page") {
      const worker = new Worker("./worker-thread.js");
      worker.on("message", (j) => {
        res.writeHead(200, { "content-type": "text/plain" });
        res.end(`slowPage ${j}`);
      });
    }
  })
  .listen(8008, () => {
    console.log("Welcome to the server port of 8008");
  });
