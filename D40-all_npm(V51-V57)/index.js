const lowerCase = require("lower-case").lowerCase;
const upperCase = require("upper-case").upperCase;
// import { upperCase } from "upper-case";

function greeting(name) {
  console.log(lowerCase(`Hey there! My name is ${name}`));
  console.log(upperCase(`Hey there! My name is ${name}`));
}

module.exports = greeting;
