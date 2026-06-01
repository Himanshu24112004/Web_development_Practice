/*
The Document Object Model (DOM) represents HTML documents as a tree structure of objects, allowing JavaScript to access, manipulate, and update page content dynamically.
 Element selection uses methods like getElementById, querySelector, or getElementsByClassName, while innerText sets plain text (ignoring HTML tags and styles) and innerHTML parses HTML markup.

Selecting Elements:-
Common methods target elements by ID, class, tag, or CSS selectors. querySelector returns the first match; querySelectorAll returns a NodeList of all matches.

*/

/*
example code:- 



<!DOCTYPE html>

<html>

<body>

 <div id="myDiv" class="content">Original <strong>text</strong></div>

 <p class="para">Hello</p>

 <script>

   // By ID

   let div = document.getElementById('myDiv');
 
   // By class (first match)

   let para = document.querySelector('.para');
  
   // All paragraphs

   let allParas = document.querySelectorAll('p');

 </script>

</body>

</html>

*/


/*

innerText vs innerHTML:- 

innerText retrieves or sets visible text only, stripping tags and respecting CSS visibility. While, innerHTML gets or sets full HTML content, parsing tags and potentially introducing security risks like XSS if untrusted input is used.

* Property	  Returns/Sets	        Includes HTML Tags?	   Ignores Hidden Elements?
* innerText	  Visible text only	      No	                Yes
* innerHTML	  Full HTML markup	      Yes			        No

*/

 // Modification Examples:-

// Setup HTML: <div id="demo">Old <b>content</b></div>

// Using innerText (plain text)

document.getElementById('demo').innerText = 'New plain text';  

// Result: "New plain text" (bold tag ignored)

// Using innerHTML (parses HTML)

document.getElementById('demo').innerHTML = 'New <b>bold</b> text!';

// Result: New bold text! (with bold styling)



// Reading content

console.log(document.getElementById('demo').innerText);  // "New bold text!"

console.log(document.getElementById('demo').innerHTML);  // "New <b>bold</b> text!"





 // innerText is safer for user input; innerHTML enables dynamic HTML insertion.

