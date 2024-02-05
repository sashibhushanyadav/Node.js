const sum = (product) => {
  console.log(`total sum ${product}`);
};

const total = (a, b, callback) => {
  let product = a + b;
  callback(product);
};

total(5, 5, sum);
