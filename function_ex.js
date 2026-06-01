// Task 1: Build a function-based console log message generator
function consoleStyler(color, background, fontSize, txt) {
    // Declare a variable for the message
    // WRITE YOUR CODE HERE
    
    // Declare a variable for the style
    // WRITE YOUR CODE HERE
    
    // Append background style to the style variable
    // WRITE YOUR CODE HERE
    
    // Append font size style to the style variable
    // WRITE YOUR CODE HERE
    
    // Log the message with the applied style
    // WRITE YOUR CODE HERE

    var message = "%c" + txt;
    var style = `color:${color};`;
     style += `background: ${background};`;
         style += `font-size: ${fontSize};`;
    
    console.log(message, style);
}


// Task 2: Build another console log message generator
function celebrateStyler(reason) {
    // Declare a fontStyle variable with default styles
    // WRITE YOUR CODE HERE
    
    // Check if the reason is "birthday"
    // WRITE YOUR CODE HERE
    
    // If reason is "champions", log a congrats message
    // WRITE YOUR CODE HERE
    
    // For any other reason, log a default message
    // WRITE YOUR CODE HERE

    var fontStyle = "color: tomato; font-size: 50px";
    if (reason === "birthday") {
        console.log(`%cHappy birthday`, fontStyle);
    }
    else if (reason === "champions") {
        console.log(`%cCongrats on the title!`,fontStyle);
    }
    else {
        console.log("%cCelebrate", fontStyle);
    }
        
}

// Task 3: Run both the consoleStyler and the celebrateStyler functions
// Call the consoleStyler function with appropriate arguments
// WRITE YOUR CODE HERE

// Call the celebrateStyler function with an appropriate argument
// WRITE YOUR CODE HERE
consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');
celebrateStyler('birthday');

// Task 4: Insert a congratulatory and custom message
function styleAndCelebrate(color, background, fontSize, txt, reason) {
    // Call consoleStyler with the first four arguments
    // WRITE YOUR CODE HERE
    
    // Call celebrateStyler with the last argument
    // WRITE YOUR CODE HERE
    consoleStyler(color, background, fontSize, txt);
    celebrateStyler(reason);


}

// Call styleAndCelebrate with appropriate arguments
// WRITE YOUR CODE HERE
styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'You made it!', 'champions');

// ==========================================
// FUNCTIONAL PROGRAMMING - Console Styling
// ==========================================

// TASK 1: Console Style Message Generator
// Purpose: Create a styled console log message
function consoleStyler(color, background, fontSize, txt) {
  // Create the message with %c placeholder for styling
  const message = "%c" + txt;
  
  // Create the style string
  let style = `color: ${color};`;
  
  // Append background and font size to style
  style += `background: ${background};`;
  style += `font-size: ${fontSize};`;
  
  // Log the message with styles
  console.log(message, style);
}

// ==========================================
// TASK 2: Celebratory Message Generator
// Purpose: Log celebratory messages based on reason
function celebrateStyler(reason) {
  // Define the font style for celebration
  const fontStyle = "color: tomato; font-size: 50px";
  
  // Use if-else to log different messages based on reason
  if (reason === "birthday") {
    console.log(`%cHappy birthday`, fontStyle);
  } else if (reason === "champions") {
    console.log(`%cCongrats on the title!`, fontStyle);
  } else {
    // Default message for other reasons
    console.log(`%cCelebration time!`, fontStyle);
  }
}

// ==========================================
// TASK 3: Invoke the Functions
// Purpose: Call and test both functions
consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');
celebrateStyler('birthday');

// ==========================================
// TASK 4: Combine Functions into One
// Purpose: Create a unified function that calls both
function styleAndCelebrate(color, background, fontSize, txt, reason) {
  // Call consoleStyler with first four parameters
  consoleStyler(color, background, fontSize, txt);
  
  // Call celebrateStyler with the reason parameter
  celebrateStyler(reason);
}

// TASK 4: Invoke the Combined Function
styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'You made it!', 'champions');