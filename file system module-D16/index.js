const fs = require("node:fs");

// Note: readFileSync and writeFileSync are the methods of fs modules
// where as readFileSync just open/show/reveal the text inside the file
// and wirteFileSync just create/make/produce the file name,but also text inside them.
// wirteFile is just rename the text.

// synchronous way
const fileContent = fs.readFileSync("./index.txt", "utf-8");
console.log(fileContent);

// asynchronous way
const fileContent2 = fs.readFileSync("./index.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
console.log(fileContent2);

fs.writeFileSync("./index2.txt", "Hello Sashi!");
fs.writeFile("./index2.txt", " Welcome to node.js", { flag: "a" }, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("backend");
  }
});
