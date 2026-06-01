/*
Promises in JavaScript represent the eventual completion (or failure) of an asynchronous operation, providing methods like .then() for success, .catch() for errors, and .finally() for cleanup, avoiding callback hell. 
Async/await builds on Promises with syntactic sugar: async functions return Promises, and await pauses execution until the Promise resolves, making code read synchronously while handling async operations.

Promise Basics:-

Promises have three states: pending (initial), fulfilled (success), or rejected (error). Chain them with .then() for sequential async tasks or use Promise.all() for parallel execution.

*/
// javascript code example :-

// Creating a Promise

const myPromise = new Promise((resolve, reject) => {

  setTimeout(() => {

    const success = Math.random() > 0.5;

    if (success) resolve('Success!');

    else reject('Error occurred!');

  }, 1000);

});

// Using .then() and .catch()

myPromise

  .then(result => console.log(result))  // 'Success!'

  .catch(error => console.log(error))   // 'Error occurred!'

  .finally(() => console.log('Done'));

/*
Async/Await :-

Mark functions async to use await, which waits for Promise resolution without blocking the thread.
 Wrap in try/catch for error handling—cleaner than .catch() chains.

​*/



// javascript code example :-



// Async function example

async function fetchData() {

  try {

  const result = await myPromise;  // Pauses here until resolved

   console.log(result);             // 'Success!'

 } catch (error) {

   console.log(error);              // 'Error occurred!'

 } finally {

   console.log('Done');

 }

}

/*

fetchData();

Comparison Table

* Approach	       Pros	                                Cons	                   Best For
* Promises	       Native chaining, parallel ops	    Nested .then() hell	       Simple async sequences
* Async/Await      Readable, linear syntax         	    Still Promise-based	       Complex async flows

Async/await simplifies debugging and maintenance but always returns a Promise, enabling further chaining if needed.

*/
