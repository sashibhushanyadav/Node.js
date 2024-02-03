const http = require("node:http");

// This is the first API created with the help of node

http
  .createServer((req, res) => {
    const name = {
      fname: "Sashi",
      lname: "Yadav",
    };
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(name));
  })
  .listen("8080", function () {
    console.log("Go to the browser at port 8080");
  });

//   OR Both are same
const server = http.createServer((req, res) => {
  const fullName = {
    firstName: "Sashi",
    lastName: "Bhushan",
  };
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(fullName));
});

server.listen(4000, () => {
  console.log("Go to the browser at port 4000");
});
