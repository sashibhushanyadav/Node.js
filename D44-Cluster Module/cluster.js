const cluster = require("cluster");
const http = require("node:http");
const OS = require("node:os");

// NOTE:
// we have studied 3 ways to execute the server parallelly.
// They are cluster, pm2 and worker threads.
 
console.log(OS.cpus().length);

if (cluster.isMaster) {
  console.log(`Master process ${process.pid} is running`);
  cluster.fork();
  cluster.fork();
} else {
  console.log(`Worker ${process.pid} started`);
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
      //    else if (req.url === "/jsonapi") {
      //     res.writeHead(200, { "content-type": "application/json" });
      //     res.end(JSON.stringify({ name: "Sashi", midName: "Bhushan" }));
      //   } else {
      //     res.writeHead(400);
      //     res.end("Page Not Found");
      //   }
    })
    .listen(8002, () => {
      console.log("server: Welcome to http module");
    });
}
