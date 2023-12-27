// FIRST WAY
// const sum = require("./function");
// console.log(sum(5, 7));

// SECOND WAY
// const sum = require("./function");
// console.log(sum(5, 7));

// THIRD WAY
// const math = require("./function");
// console.log(math.add(5, 7));
// console.log(math.sub(5, 7));

// FORTH/FIFTH WAY
const math = require("./function");
const { add, sub } = math;
console.log(add(5, 7));
console.log(sub(5, 7));
