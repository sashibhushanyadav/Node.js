const https = require("node:https");

// In node.js async methods are handle by libuv.
// They are handled in two different ways(i. Native async mechanism ii. Thread pool)
// whenever possible, Libuv will use native async mechanism in the OS(operating system) so as to avoid blocking the main thread.

// NOTE: 
// -https.request is a network input/output operation and not a CPU bound operation.
// -(although both crypto.pbkdf2 and https.request are asynchronous,
// https.request method does not seem to use the thread pool).
// -https.request does not seem to be affected by the number of CPU cores either.

const MAX_CALLS = 10;

const start = Date.now();
for (let i = 0; i < MAX_CALLS; i++) {
  https
    .request("https://www.google.com", (res) => {
      res.on("data", () => {});
      res.on("end", () => {
        console.log(`Request: ${i + 1}`, Date.now() - start);
      });
    })
    .end();
}
