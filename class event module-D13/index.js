const shop = require("./pizzaOrder");
const drinkMachine = require("./drink-Machine");

const mcShop = new shop();
const DrinkMachine = new drinkMachine();

mcShop.on("order", (size, topping) => {
  console.log(`Order received! Baking a ${size} pizza with ${topping}`);
  DrinkMachine.serveDrink(size);
});

mcShop.order("large", "mushrooms");
mcShop.displayOrderNumber();
