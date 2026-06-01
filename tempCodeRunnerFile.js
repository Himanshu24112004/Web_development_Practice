var a=Number(prompt("Enter the number:"));
var b=Number(prompt("Enter the number:"));

// arithmetic operator
console.log("Additon:" + (a+b));
console.log("Subtraction:" + (a-b));
console.log("Multiplication:" + (a*b));
console.log("Divison:" + (a/b));
console.log("Modulus:" + (a%b));
//logical  operator
console.log("AND :"+ ((a==5)&&(b==6)));
console.log("OR :"+ ((a==5)||(b==6)));
console.log("NOT :"+ !(a==5));
//Relational Operator
console.log("Greater than(>):" + (a>b));
console.log("Greater than equals to(>=):" + (a>=b));
console.log("Lesser than(>):" + (a<b));
console.log("Lesser than equals to(<=):" + (a<=b));
console.log("Not equals to(!=):" + (a!=b));
console.log("Equals (==):" + (a==b));
console.log("Equals and similar type(===):" + (a===b));
//asssignment operator
console.log("original value:"+ a );
console.log("After += :" + (a += b));
console.log("After -= :" + (a -= b));
console.log("After *= :" + (a *= b));
console.log("After /= :" + (a /= b));