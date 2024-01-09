const events = require("node:events");
class pizzaShop extends events {
  constructor() {
    super();
    this.orderNumber = 0;
  }

  order() {
    this.orderNumber++;
    this.emit("order", size, topping);
  }

  displayOrderNumber() {
    console.log(`Current order number: ${this.orderNumber}`);
  }
}

module.exports = pizzaShop;
