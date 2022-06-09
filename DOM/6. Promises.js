// A promise starts in a pending state. That means the process is not complete. 
// If the operation is successful, the process ends in a fulfilled state. 
// And, if an error occurs, the process ends in a rejected state..

// Creating a promise
const myPromise = new Promise((resolve, reject) => {
    // setTimeout(() => {
        resolve();
    // }, 2000);
})

// Resolution function
const handleResolved = () => {
    console.log("Promise got resolved");
}

// Rejection function
const handleRejected = (y) => {
    console.log("Promise got rejected.");
}

// handing the promise
myPromise.then(handleResolved).catch(handleRejected);
console.log("After the promise call.");

