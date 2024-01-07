const events = require("node:events");
// console.log("sassshi");
const emitter = new events();

emitter.on("order-pizza", (size, topping) => {
  console.log(`Order received! Baking a ${size} pizza with ${topping}`);
});

emitter.on("order-pizza", (size) => {
  if (size === "large") {
    console.log("Serving complimentary drink");
  }
});

console.log("Do work before event occurs in the system");

emitter.emit("order-pizza", "large", "mushrooms");
