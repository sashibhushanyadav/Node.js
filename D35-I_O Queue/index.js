const fs = require("node:fs");

// // EXPERIMENT ONE
// fs.readFile(__filename, () => {
//   console.log("modules");
// });
// process.nextTick(() => {
//   console.log("process");
// });
// Promise.resolve().then(() => {
//   console.log("promise");
// });
// // Result: process, promise, modules
// //ELABORATION//
// -As per the concept, rules, or whatever it called.
// -Microtask queue callbacks execute before I/O queue.
// -In microtask queue, process.nextTick executes before the promise queue.

// // EXPERIMENT TWO
// setTimeout(() => {
//   console.log("setTimeout");
// });
// fs.readFile(__filename, () => {
//   console.log("modules");
// });
// Result:i. modules, setTimeout (this happened due to timer log in setTimeout) and sometimes
//       ii. setTimeout, modules (this happened due to the rules of event loop)
// -When running setTimeout with delay 0ms and an I/O async method, the order of execution can never be guaranteed.

// EXPERIMENT THREE
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

for (let i = 0; i < 1000000; i++) {}
// For loop is used for removing the timer issue between timer queue & I/O queue.
// Result: process, promise, setTimeout, module
