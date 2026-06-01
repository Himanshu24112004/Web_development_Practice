/*In JavaScript, var, let, and const differ primarily in scope and hoisting behavior, affecting how variables are accessible and initialized. var uses function or global scope and hoists with initialization to undefined, while let and const use block scope and hoist without initialization, entering a Temporal Dead Zone (TDZ).
​

Scope Differences:
-
var declarations are function-scoped, meaning they are accessible throughout the entire function, even outside blocks like if or for loops. In contrast, let and const are block-scoped, limiting access to the {} block where declared.
​
*/

//javascript code :-

if (true) {
  var x = 1;      // Function/global scope
  let y = 2;      // Block scope only
  const z = 3;    // Block scope only
}
console.log(x);   // 1 (accessible)
console.log(y);   // ReferenceError: y is not defined
console.log(z);   // ReferenceError: z is not defined

//   Hoisting Behavior:-

//   All three are hoisted to the top of their scope during compilation, but var initializes to undefined, allowing access before declaration (outputs undefined). let and const hoist without initialization, throwing a ReferenceError if accessed in the TDZ before declaration.
 ​

// javascript code:-

console.log(a);   // undefined (hoisted and initialized)
var a = 10;
console.log(b);   // ReferenceError: Cannot access 'b' before initialization
let b = 20;
console.log(c);   // ReferenceError: Cannot access 'c' before initialization
const c = 30;

//  Reassignment Rules:-

//  var and let allow reassignment, but const prevents it after initial assignment (though object properties can mutate). None allow redeclaration in the same scope except var.
