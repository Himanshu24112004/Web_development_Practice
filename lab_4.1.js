/*
JavaScript array methods like push(), pop(), shift(), and unshift() manipulate arrays by adding or removing elements from either end, directly mutating the original array and often returning the affected item or new length. 
These form a stack/queue-like interface: push/pop operate at the end (faster), while shift/unshift work at the start (slower due to index shifting).

Method Summary:-

Method	      Action			 Position	     Returns Example Effect on 

* push()	  Adds to end		  End		       New length	
 ​
* pop()	      Removes from end	  End		       Removed item	
 ​
* shift()     Removes from start  Start		       Removed item	
​
* unshift()	  Adds to start		  Start		       New length	

​*/

// javascript Code Examples:-

let fruits = ['banana', 'orange'];

// push: adds to end, returns new length (3)

fruits.push('apple');

console.log(fruits);  // \['banana', 'orange', 'apple']

// pop: removes from end, returns 'apple'

let last = fruits.pop();

console.log(fruits);  // \['banana', 'orange']

console.log(last);    // 'apple'

// unshift: adds to start, returns new length (2)

fruits.unshift('mango');

console.log(fruits);  // \['mango', 'banana', 'orange']

// shift: removes from start, returns 'mango'

let first = fruits.shift();

console.log(fruits);  // \['banana', 'orange']

console.log(first);   // 'mango'



// All methods mutate the array in place; use concat() or spread syntax (\[...arr, item]) for non-mutating alternatives.



