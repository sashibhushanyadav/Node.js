const http = require("node:http");

// NOTE:
// createServer,writeHead,end these all are methods
// createServer is for creacting server and listen for port

const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "Text/plain" });
  response.end("Hello Sashi");
});

server.listen(3000, () => {
  console.log("server running on port 3000");
});
