// let greeting = "Hello World\nGreetings to all."

let greeting = 
`Hello World,                  kndlgjkdhgrd ksjglvkedj         
Greetings to all.`
// console.log(greeting);



const person = {
	firstName: "Luke",
	lastName: "Skywalker",
	age: 19,
};




let fruits = ["Apple", "Banana"];

let [a,b] = fruits;

// console.log("I have", a, "and", b )
console.log(
	`I 
have 
${a} 
and 
${b}`)


// console.log("His name is", person.firstName , person.lastName, "and I am", person.age);

const { firstName, _ , age} = person;

// console.log("His name is", firstName , "and I am", age);