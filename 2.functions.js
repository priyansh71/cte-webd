function addNum1(a,b,c) {
	console.log(a + b + c);

}

addNum1(1,2,3);



















// function addNum(a,b,c) {
// 	const d = a + b + c;
// 	console.log(d);
// }

function sumTo(n){
	let sum = 0;
	for(let i = 0; i <= n; i++){
		sum += i;
	}
	return sum;
}

// console.log(sumTo(10));

// // function maybeReturn(n){
// // 	if(n%2 === 0){
// // 		return "even";
// // 	}
// // 	// else return undefined;
// // }


// // console.log(sumTo(10));
// // console.log(addNum1(4,2,3));
// // console.log(maybeReturn(4));

// // anonymous


(function(){
	alert("hello");
});


function add(a,b){
	a+=10
	b+=10
	return a + b;
}

const addTen = a =>  a + 10;

console.log(addTen(1));









// ((a) => a + 100);

// (a => a + 1);

// // console.log(y)






// // // Arrow function :- ES6 syntax

// // const addNum3 = (a,b) => a + b;

// // const doubler = b => 2*b;

// // console.log(doubler(7));