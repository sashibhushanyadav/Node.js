// // SYNTAX
// setImmediate(() => {
//  statement of code;
// });

const fs = require("node:fs");

fs.readFile(__filename, () => {
  console.log("module");
});
process.nextTick(() => {
  console.log("process");
});
Promise.resolve().then(() => {
  console.log("promise");
});
setTimeout(() => {
  console.log("setTimeout");
}, 0);
setImmediate(() => {
  console.log("setImmediate");
});
for (let i = 0; i < 200000000; i++) {}
// Actual Result: process, promise, setTimeout, setImmediate, module
// Expected Result: process, promise, setTimeout, module, setImmediate

// REASON ELABORATE
// -When control enters the I/O queue for the first time it sees I/O queue
//  is empty (due to long for loop). Since, it is empty then control proceeds 
//  to the polling part of the event loop. Where it (polling part of event loop)
//  asks readFile if I/O queue has completed its callbacks, readFile says yes and
//  the event loop now queue up the callback function in the I/O queue

// -However, execution is past the I/O queue and the callback has to wait for 
//  its turn control then proceeds to check queue it finds one callback and logs 
//  setImmediate one to the console.