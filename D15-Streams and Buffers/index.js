const buffer = new Buffer.from("Bhushan");
// NOTE
// Stream is a sequence of data which moves from one point to another with in a time.
//Chunk is a small piece of data
// Chunking is the process of splitting data into a smaller one (The smaller one is called chunk)

buffer.write("sashi");
buffer.write("sashiyadav");

console.log(buffer.toString());
console.log(buffer);
console.log(buffer.toJSON());
