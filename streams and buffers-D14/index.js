const buffer = new Buffer.from("Bhushan");

buffer.write("sashi");
buffer.write("sashiyadav");

console.log(buffer.toString());
console.log(buffer);
console.log(buffer.toJSON());
