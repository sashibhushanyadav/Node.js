// // SYNTAX
// 1. nextTick queue
// -process.nextTick(()=>{
//     statement of code
// })

// 2. Promise queue
// -promise.resolve().then(()=>{
//     code
// })

// // EXPERIMENT ONE
// console.log("one");
// process.nextTick(() => {
//   console.log("hello");
// });
// console.log("two");

// // Results: one, two, hello
// -hello prints in last because of async.

// // EXPERIMENT TWO
// Promise.resolve().then(() => {
//   console.log("one");
// });
// process.nextTick(() => {
//   console.log("two");
// });
// // Results: two, one
// -In microTask queue, nextTick callback print before the promise queue.

// EXPERIMENT THREE
// NEXTTICK
process.nextTick(() => {
  console.log("1");
});
process.nextTick(() => {
  console.log("2");
  process.nextTick(() => {
    console.log("3");
  });
});
process.nextTick(() => {
  console.log("4");
});
// Result: 1,2,4,3


// PROMISE
Promise.resolve().then(() => {
  console.log("1");
});
Promise.resolve().then(() => {
  console.log("2");
  process.nextTick(() => {
    console.log("3");
  });
});
Promise.resolve().then(() => {
  console.log("4");
});
// Result: 1,2,4,3
