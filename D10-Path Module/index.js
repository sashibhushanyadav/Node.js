const path = require("node:path");
// OR
// const path = require("path");

console.log(__filename);
// It gives the location of file
console.log(__dirname);
// It gives the location of folder/dir/directory

console.log(path.basename(__filename));
// It gives directly the file name
console.log(path.basename(__dirname));
// It gives directly the dir name

// ext= extension
console.log(path.extname(__filename));
// It gives the extension of file
console.log(path.extname(__dirname));
// It gives the extension of dir

console.log(path.parse(__filename));
// It gives all (root,dir,base,extension and name) of a file

console.log(path.format(path.parse(__filename)));
// It gives just the location of file

console.log(path.isAbsolute(__filename));
// It gives true because filename=index.js

console.log(path.isAbsolute("./data.js"));
// It gives false because data is not equal to index.js

console.log(path.join("folder1", "folder2", "index.html"));
// It gives like folder1/folder2/index.html
console.log(path.join("folder1", "folder2", "../index.html"));
// It gives folder1/index.html
console.log(path.join(__dirname, "data.json"));
// It gives dir name and add data.json filename

console.log(path.resolve("folder1", "folder2", "index.html"));
console.log(path.resolve("/folder1", "folder2", "index.html"));
console.log(path.resolve("/folder1", "//folder2", "index.html"));
console.log(path.resolve("folder1", "folder2", "../index.html"));
console.log(path.resolve(__dirname, "data.json"));
