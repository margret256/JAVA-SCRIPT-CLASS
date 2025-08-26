JavaScript Basics: Strings, Functions, and Booleans
STRINGS
This repository contains examples and explanations of fundamental JavaScript concepts: strings, functions, and booleans. These concepts are essential building blocks for any JavaScript developer.
Strings
Strings are sequences of characters used to represent text in JavaScript. They are enclosed in single quotes ('), double quotes ("), or backticks (`) for template literals.

Examples:
let name = "Margret";
let greeting = 'Hello, ' + name + '!';
let message = `Welcome, ${name}!`;
console.log(greeting); // Output: Hello, Margret!
console.log(message);  // Output: Welcome, Margret!

Common String Methods:
length – Get the number of characters
toUpperCase() / toLowerCase() – Change case
includes() – Check if string contains a substring
slice() – Extract part of a string

FUNCTIONS
Functions are reusable blocks of code that perform a specific task. They help organize and simplify your code.
Syntax:
// Function Declaration
function greet(user) {
  return `Hello, ${user}!`;
}

// Function Expression
const greetUser = function(user) {
  return `Hello, ${user}!`;
}

// Arrow Function
const greetArrow = (user) => `Hello, ${user}!`;
console.log(greet("Margret"));       // Output: Hello, Margret!
console.log(greetUser("Margret"));   // Output: Hello, Margret!
console.log(greetArrow("Margret"));  // Output: Hello, Margret!

Key Points:
Functions can accept parameters and return values.
Functions help avoid repetitive code.
Arrow functions provide a concise syntax.


BOOLEANS
Booleans represent logical values: true or false. They are often used in conditions and loops.

Examples:
let isOnline = true;
let isAdmin = false;
if (isOnline) {
  console.log("User is online");
} else {
  console.log("User is offline");
}
// Boolean expressions
console.log(5 > 3); // true
console.log(10 === '10'); // false
Boolean Operators:
&& (AND)
|| (OR)
! (NOT)
Booleans are fundamental for controlling program flow in JavaScript.
USAGE
Clone this repository:
git clone https://github.com/margret256/js-basics.git
Open the examples in a browser or run them using Node.js:
node filename.js

