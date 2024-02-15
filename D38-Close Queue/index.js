const fs = require("node:fs");

const readableStream = fs.createReadStream(__filename);
readableStream.close();
readableStream.on("close", () => {
  console.log("close_queue");
});

setImmediate(() => {
  console.log("setImmediate");
});
setTimeout(() => {
  console.log("setTimeout");
}, 0);
process.nextTick(() => {
  console.log("process");
});
Promise.resolve().then(() => {
  console.log("promise");
});
// Result: process, promise, setTimeout, setImmediate, close_queue.
