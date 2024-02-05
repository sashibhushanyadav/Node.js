const fs = require("node:fs/promises");

// This is asynchronous
fs.readFile("./file.txt", "utf-8")
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

//   async-await function
const fun = async () => {
  try {
    const data = await fs.readFile("file.txt", "utf-8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
fun();

// OR
async function xyz() {
  try {
    const data = await fs.readFile("./file.txt", "utf-8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
xyz();
