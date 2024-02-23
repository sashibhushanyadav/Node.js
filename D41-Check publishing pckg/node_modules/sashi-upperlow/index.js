const lowerCase = require("lower-case").lowerCase;
const upperCase = require("upper-case").upperCase;
// import { upperCase } from "upper-case";

function greeting(name) {
  console.log(lowerCase(`WelCome to my World Mr/Ms. ${name}`));
  console.log(upperCase(`WelCome to my World Mr/Ms. ${name}`));
}

module.exports = greeting;
