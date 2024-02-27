//  SIMPLE HTTP SERVER.
// NOTE:
// Deploying node.js from vender and fly.io and i used render for free.

const http = require("node:http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello Sashi");
});

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log("Server is running at part 8080");
});
