// const isOdd = require('is-odd');
// const message = require("./message.js");
// const { name, age } = require("./person.js");

const { name, age, where } = require("./person.js"); //named import es6
// import y  from "./message.js"; // default import es6
// import isOdd from "is-odd"; //default import es6

console.log(name,age)
console.log(where(56))
// console.log(y)
// console.log(isOdd(2))
