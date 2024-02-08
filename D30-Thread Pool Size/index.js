const crypto = require("node:crypto");

// NOTE: libuv's thead pool has 4 threads by default
// (by increasing the thread pool size, we are able to improve the 
// total time taken to run multiple calls of an asynchronous method like pbkdf2).
// (increasing the thread pool size can help with performance but that
// is limited by the number of available CPU cores)
// but macbook has 8 CPU cores

process.env.UV_THREADPOOL_SIZE = 10;
const MAX_CALLS = 10;

const start = Date.now();
for (let i = 0; i < MAX_CALLS; i++) {
  crypto.pbkdf2("password", "salt", 100000, 512, "sha512", function () {
    console.log(`hash: ${i + 1}`, Date.now() - start);
  });
}
