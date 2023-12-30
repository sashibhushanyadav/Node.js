// FIRST AND SECOND WAY
// import add from "./function.mjs";
// console.log(add(5, 6));

// THIRD WAY
// import math from "./function.mjs";
// const { add, subtract } = math;
// console.log(add(5, 5));
// console.log(subtract(5, 5));

// FOURTH WAY
// import * as math from "./function.mjs";
// const { add, subtract } = math;
// console.log(add(5, 5));
// console.log(subtract(5, 5));
// OR
import { add, subtract } from "./function.mjs";
console.log(add(5, 5));
console.log(subtract(5, 5));
