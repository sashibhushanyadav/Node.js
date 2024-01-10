const shop = require("./pizzaOrder");

const mcShop = new shop();

mcShop.orderNumber("order", (size, topping) => {
  console.log(`Order received! Baking a ${size} pizza with ${topping}`);
});

mcShop.order("small", "mushrooms");
mcShop.displayOrderNumber();
