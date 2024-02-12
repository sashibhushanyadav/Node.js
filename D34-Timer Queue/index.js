// SYNTAX

// i.setTimeout;
// setTimeout(() => {
//   code;
// }, timeDelay);

// EXPERIMENT
setTimeout(() => {
  console.log("1");
}, 0);
setTimeout(() => {
  console.log("2");
  process.nextTick(() => {
    console.log("inner setTimeout");
  });
}, 0);
setTimeout(() => {
  console.log("4");
}, 0);
// Result: 1,2,inner setTimeout,4
// -inner setTimeout run before the log 4 because of microtask queue

// NEXTTICK
process.nextTick(() => {
  console.log("1");
});
process.nextTick(() => {
  console.log("2");
  process.nextTick(() => {
    console.log("inner process.nextTick");
  });
});
process.nextTick(() => {
  console.log("4");
});
// Result: 1,2,4, inner process.nextTick

// PROMISE
Promise.resolve().then(() => {
  console.log("1");
});
Promise.resolve().then(() => {
  console.log("2");
  process.nextTick(() => {
    console.log("inner promise");
  });
});
Promise.resolve().then(() => {
  console.log("4");
});
// Result: 1,2,4, inner promise
