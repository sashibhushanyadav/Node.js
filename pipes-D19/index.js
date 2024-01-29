const fs = require("node:fs");
const zlib = require("node:zlib");

const gzip = zlib.createGzip();

// zlip is able to create the new file with the help of createGzip

// NOTE:
// Pipes is the connection between the readablestream and writeablestream
// pipe transfer the stuffs from one file to another

const readableStream = fs.createReadStream("./file.txt", {
  encoding: "utf-8",
});

readableStream.pipe(gzip).pipe(fs.WriteStream("./file3.txt.gz"));

// console.log(readableStream);
const writeablestream = fs.createWriteStream("./file2.txt");
readableStream.pipe(writeablestream);
