const shop = require("./pizzaOrder");

const mcShop = new shop();

mcShop.on("order", (size, topping) => {
  console.log(`Order received! Baking a ${size} pizza with ${topping}`);
});

mcShop.order("small", "doublecheese");
mcShop.displayOrderNumber();
mcShop.displayOrderNumber();
