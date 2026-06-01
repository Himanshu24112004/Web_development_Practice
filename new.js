// Basic Output Test
/*console.log("Compiler Test: Hello, World!");

// Arithmetic Operation Test
let sum = 2 + 3;
console.log("Sum of 2 + 3 =", sum);

// Conditional Statement Test
if (sum === 5) {
  console.log("Condition Test: Passed");
} else {
  console.log("Condition Test: Failed");
}

// Loop Test
for (let i = 0; i < 3; i++) {
  console.log("Loop Test:", i);*/

// Advanced Compiler Test

// Function Declaration and Arrow Function
function greet(name) {
  return `Hello, ${name}!`;
}
const greetArrow = (name) => `Hello, ${name}!`;

console.log(greet("Alice"));
console.log(greetArrow("Bob"));

// Object Creation and Method
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`;
  }
};
console.log(person.getFullName());

// Array Methods: map, filter, reduce
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);
const sum = numbers.reduce((acc, n) => acc + n, 0);

console.log("Doubled:", doubled);
console.log("Evens:", evens);
console.log("Sum:", sum);

// Error Handling with try-catch
try {
  throw new Error("This is a test error.");
} catch (error) {
  console.error("Caught error:", error.message);
} finally {
  console.log("Finally block executed.");
}

// Class Definition and Instantiation
class Vehicle {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
  displayInfo() {
    return `${this.brand} ${this.model}`;
  }
}
const car = new Vehicle("Toyota", "Camry");
console.log(car.displayInfo());
