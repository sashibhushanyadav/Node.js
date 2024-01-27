const fs = require("node:fs");

// NOTE:
// Types of streams
// i.Readable streams: from which data can be read
// ii.Writable streams: to which we can write data
// iii.Duplex streams: that are both Readable and Writable
// iv.Transform streams: that can modify or transform the data as it is written and read


const readableStream = fs.createReadStream("./file.txt", {
  encoding: "utf-8",
});

const writeableStream = fs.createWriteStream("./file2.txt");

readableStream.on("data", (chunk) => {
  console.log(chunk);
  writeableStream.write(chunk);
});
