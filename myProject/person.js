// Named exports example

const name = "Jesse Pinkman";
const age = 25;

// ES6 method for named export
// export {
//     name,
//     age
// }

// pre-ES6 method for named export
module.exports = {
    name,
    age,
    where : (val => `${name} was born in ${val}.`)
}