// FIRST WAY
// const add = (a, b) => {
//   return a + b;
// };
// module.exports = add;

// SECOND WAY
// module.exports = (a, b) => {
//   return a + b;
// };

// THIRD WAY
// const add = (a, b) => {
//   return a + b;
// };
// const sub = (a, b) => {
//   return a - b;
// };
// module.exports = {
//     add: add,
//     sub,
// };

// FORTH WAY
// module.exports.add = (a, b) => {
//   return a + b;
// };
// module.exports.sub = (a, b) => {
//   return a - b;
// };

// FIFTH WAY
exports.add = (a, b) => {
  return a + b;
};
exports.sub = (a, b) => {
  return a - b;
};
