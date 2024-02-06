const crypto = require("node:crypto");

// NOTE:
// crypto is a module (like module as fs and http) and pbkdf2 is a method of crypto
// pbkdf2 stands for password based key derivation function 2
// pbkdf2 is a cpu intensive method
// date object(Date.now()) is used to measure the time taken

// Synchronous version
// const start = Date.now();
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// console.log("Hash:", Date.now() - start);

// Asynchronous version
const MAX_CALLS = 3;

const start = Date.now();
for (let i = 0; i < MAX_CALLS; i++) {
  crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
    console.log(`Hash:${i + 1}`, Date.now() - start);
  });
}
