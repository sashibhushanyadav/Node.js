const fs = require("node:fs");

// // EXPERIMENT ONE
// fs.readFile(__filename, () => {
//   console.log("module");
//   setImmediate(() => {
//     console.log("setImmediate");
//   });
// });
// process.nextTick(() => {
//   console.log("process");
// });
// Promise.resolve().then(() => {
//   console.log("promise");
// });
// setTimeout(() => {
//   console.log("setTimeout");
// });

// for (let i = 0; i < 3900000; i++) {}
// Result: process, promise, setTimeout, module, setImmediate
// (In first loop iteration, results are process, promise, setTimeout while
// in second loop iteration it gives module and setImmediate due to long for loop).

// //EXPERIMENT TWO
// fs.readFile(__filename, () => {
//   console.log("module");
//   setImmediate(() => {
//     console.log("setImmediate");
//   });
//   process.nextTick(() => {
//     console.log("process 1");
//   });
//   Promise.resolve().then(() => {
//     console.log("promise 1");
//   });
// });

// process.nextTick(() => {
//   console.log("process 2");
// });
// Promise.resolve().then(() => {
//   console.log("promise 2");
// });
// setTimeout(() => {
//   console.log("setTimeout");
// });
// Result: process 2, promise 2, setTimeout, module, process 1, promise 1, setImmediate.
// -1st round loop, results are process 2, promise 2, setTimeout
// -2nd round loop, result is module after control reach to the
//  I/O polling then callback appears in check and microtask queue.
//  So, a/c to rules microtask queue execute first then check queue.

// EXPERIMENT
setImmediate(() => {
  console.log("setImmediate 1");
});
setImmediate(() => {
  console.log("setImmediate 2");
  process.nextTick(() => {
    console.log("process");
  });
  Promise.resolve().then(() => {
    console.log("promise");
  });
});
setImmediate(() => {
  console.log("setImmediate 3");
});
// Result: setImmediate 1, setImmediate 2, process, promise, setImmediate 3
// -1st loop execute, it gives setImmediate 1.
// -2nd loop execute, it gives setImmediate 2 while executing 2nd loop process
//  and promise callbacks are appears in  microtask queue. So, a/c to rule
//  callbacks in microtask queues are execute before the check queue which is
//  process, promise, setImmediate 3
