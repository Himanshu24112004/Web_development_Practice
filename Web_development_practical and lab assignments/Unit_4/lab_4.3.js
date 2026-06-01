/*
Event delegation is a JavaScript pattern where a single event listener is attached to a common parent element to handle events from its child elements, instead of adding separate listeners to each child.
This works because of event bubbling: events triggered on a child propagate up the DOM tree, allowing the parent’s handler to inspect event.target and decide what to do.

What is Event Delegation?
A parent element listens for events (like click) that occur on its child elements and handles them in one place using the event object’s target property.
It improves performance and maintainability, especially when many child elements exist or are added dynamically, since only one listener is needed.

Event Delegation Example:-

<ul id="item-list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

*/

  const itemList = document.getElementById('item-list');

  itemList.addEventListener('click', function (event) {
    // Check that a <li> was clicked
    if (event.target.tagName === 'LI') {
      console.log('Clicked:', event.target.textContent);
    }
  });

/*

Here, the single listener on <ul> handles clicks for all <li> items, including ones added later.

Using addEventListener
addEventListener registers a function to be called whenever a specified event occurs on a given element. It takes at least two arguments: the event type (like "click" or "input") and the callback function, plus an optional third options parameter (e.g., { once: true } or { capture: true }).
​

Basic addEventListener Usage:-

<button id="btn">Click me</button>
*/

  const btn = document.getElementById('btn');

  // Attach a click listener
  btn.addEventListener('click', function (event) {
    console.log('Button clicked');
    console.log('Event target:', event.target.id); // 'btn'
  });

  /*
Multiple listeners can be attached to the same element and event type, and they can be removed later with removeEventListener using the same function reference.

addEventListener with Event Delegation:-

<div id="buttons">
  <button class="action-btn">Save</button>
  <button class="action-btn">Load</button>
  <button class="action-btn">Search</button>
</div>

*/


  const container = document.getElementById('buttons');

  container.addEventListener('click', function (event) {
    if (!event.target.classList.contains('action-btn')) return;

    const text = event.target.textContent;
    console.log('Clicked:', text);

    if (text === 'Save') {
      // handle save
    } else if (text === 'Load') {
      // handle load
    } else if (text === 'Search') {
      // handle search
    }
  });
 


 // This pattern uses one addEventListener on the parent to manage all current and future .action-btn buttons via event.target checks.
