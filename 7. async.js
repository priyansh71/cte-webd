// "async and await make promises easier to write"
// async makes a function return a Promise
// await makes a function wait for a Promise
// The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, 
// avoiding the need to explicitly configure promise chains.

const resolveAfter2Seconds = () => {
    console.log("Starting Slow Promise.")
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("That was slow.")
      }, 2000)
    })
}

const resolveAfter1Second = () => {
    console.log("Starting Fast Promise.")
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("That was fast.")
        }, 1000)
    })
}

// console.log("==SEQUENTIAL START with .then()==");
// resolveAfter1Second()
//     .then(result => console.log(result))
//     .catch(err => console.log(err))
//     .then(() => resolveAfter2Seconds())
//     .then(result => console.log(result))
//     .catch(err => console.log(err))



// let slow;
// let fast;
// console.log('==CONCURRENT START with .then()==');
// resolveAfter1Second()
//     .then(response => {
//        slow = response;
//     })
//     .catch(err => console.log(err))
//     .then(() => resolveAfter2Seconds())
//     .then(response => {
//         fast = response;
//         console.log(slow);
//         console.log(fast);
//     })
//     .catch(err => console.log(err))


// The whole thing works, because every call to a .then() returns a new promise in this case
// so that we can call the next .then() on it.
// When a handler returns a value, it becomes the result of that promise, so the next .then() is called with it.

// const asyncCall = async () => {
//     console.log("Called the async function.");
//     const result = await resolveAfter2Seconds();
//     console.log(result);
// }

// asyncCall();


const sequentialStart = async () => {
    const fast = await resolveAfter1Second()
    console.log(fast) 
    const slow = await resolveAfter2Seconds()
    console.log(slow)
}
  
const concurrentStart  = async () =>{

    const fast = resolveAfter1Second();
    const slow = resolveAfter2Seconds();
  
    console.log(await fast);
    console.log(await slow);
}


// sequentialStart();
concurrentStart();