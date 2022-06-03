// Higher Order Array Methods

let numbers = [3, 56, 2, 48, 5, 97, 74];

/* 1. Array.Map() -----------------
 	Used for creating a new array by doing something with each item in an array.
*/


// 
// numbers.map()

const double = x => x*2;


const newNumbers1 = numbers.map(double);
const newNumbers2 = numbers.map(x =>  x * 2);

// console.log(numbers);
// console.log(newNumbers1);
// console.log(newNumbers2);


// console.log(newNumbers2);


/* 2. Array.Filter() ------------
	Create a new array by keeping the items that return true.
    [3, 56, 2, 48, 5, 97 , 74];
*/

// const newArray = numbers.filter(x => false)

// console.log(newArray);

const newNumbers3 = numbers.filter(num =>  num > 10);
// console.log(newNumbers3);


/* Array.forEach() ----------------------------------------------------------------
  The forEach() method executes a provided function once for each array element.
*/



let newNumber = 0;
numbers.forEach((currentNumber) => {
  newNumber += currentNumber
})


// console.log(newNumber);


/* Array.Find() -----------------------------------------------------------------
Returns the found element in the array if some element in the array satisfies 
the testing function, or undefined if not found.
*/

const newNumbers5 = numbers.find(num => num > 10 );
console.log(newNumbers5);

const newNumbers6 = numbers.findIndex(num => num > 10 );
console.log(newNumbers6);