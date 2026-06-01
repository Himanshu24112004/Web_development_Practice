/*
JavaScript control flow statements manage execution order using conditionals like if/else and switch, and loops like for, while, and do-while for repetition. Loops differ mainly in condition check timing: for suits known iterations with compact syntax, while checks before execution (may skip entirely), and do-while executes once before checking.

Main Control Flow Types:-

Conditionals: if, else if, else evaluate booleans for branching; switch matches expressions to cases for multi-way decisions.

Loops: Repeat code based on conditions; include for, while, do-while, for...of, for...in.

Jump statements: break exits loops/switches early; continue skips to next iteration; return exits functions.

Loop Differences

for initializes, checks condition, then updates in one line—ideal for countable iterations. while tests condition first, potentially zero executions. do-while runs body once, then tests—guarantees at least one run.

* Feature	           for Loop	                     while Loop	   		          do-while Loop
* Syntax	           for(init; cond; update)	     while(cond)			      do { } while(cond)
* Condition Check         Before each iteration	     Before each iteration	      After each iteration
* Min Executions	   0 (if cond false initially)	 0 (if cond false initially)  1 (always)
* Best For	           Known iteration count	     Unknown, condition-driven	  At least one execution needed

*/

// javascript Code Examples:-





// for loop: counts 0-4

for (let i = 0; i < 5; i++) {

console.log(i);  // 0,1,2,3,4

}

// while loop: same, but explicit update

let j = 0;

while (j < 5) {

console.log(j);  // 0,1,2,3,4

 j++;

}



// do-while: runs once even if cond false initially

let k = 6;

do {

console.log(k);  // 6 (runs once)

} while (k < 5);


// Outputs differ only for do-while when starting beyond condition.

​





