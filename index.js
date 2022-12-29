// Q.1 What is hoisting?    
// In JavaScript, hoisting is the behavior of moving declarations to the top of their scope before code execution. This means that declarations of variables and functions are automatically moved to the top of their containing scope, regardless of where they appear in the code.

// console.log(x); //output:- 5
// var x = 5; 

// Hoisting can lead to confusing behavior in some cases, especially when using the var keyword to declare variables. It is generally a good idea to declare variables and functions at the top of their scope to avoid confusion. In modern JavaScript, the let and const keywords can be used to declare variables that are not hoisted.




// Q.2 What is a Temporal Dead Zone?
// Ans:- In JavaScript, the Temporal Dead Zone (TDZ) is a period of time during which a variable declared with the let or const keywords is not accessible. The TDZ exists to prevent the use of uninitialized variables.
// console.log(x); // ReferenceError: x is not defined
// let x = 5;

// In this example, the console.log statement attempts to access the x variable before it is initialized. This causes a ReferenceError to be thrown, because the x variable is in the TDZ at this point in the code.


// Q.3 What is the DOM?
// Ans:- The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the structure of a document as a tree of objects, with each object representing a part of the document.

// The DOM allows you to manipulate the content and structure of a document by changing the properties of the objects in the tree. For example, you can use the DOM to add, delete, or modify elements in an HTML page, or to change the attributes of an element.

// The DOM is an important concept in web development, as it allows you to create dynamic and interactive web pages. It is supported by all modern web browsers and is the basis for many JavaScript libraries and frameworks.
// E.g:-
// Get the element with the ID 'my-element'
// let element = document.getElementById('my-element');

// // Change the text of the element
// element.innerText = 'Hello, world!';






// Q.4 Explain passed by value and passed by reference
// Ans:- In JavaScript, variables can be passed to functions by value or by reference. This determines how the function receives and modifies the value of the variable.

// When a variable is passed by value, the function receives a copy of the value of the variable. This means that any changes made to the variable within the function have no effect outside the function.




// Q.5 Write code to explain map and filter in arrays
// Ans:-The map method allows you to transform the elements of an array by applying a function to each element. It returns a new array with the transformed elements. 
// E.g
// const numbers = [1, 2, 3, 4, 5];

// Transform the elements of the array by doubling them
// const doubled = numbers.map((x) => x * 2);

// console.log(doubled); // Output: [2, 4, 6, 8, 10]


// The filter method allows you to filter the elements of an array by applying a test function to each element. It returns a new array with the elements that pass the test.
// E.g :- const numbers = [1, 2, 3, 4, 5];

// Filter the elements of the array by only keeping the even numbers
// const evens = numbers.filter((x) => x % 2 === 0);

// console.log(evens); // Output: [2, 4]


// Q.6 What is the purpose of async/await keywords?
// Ans:-The async and await keywords are used in JavaScript to work with asynchronous code. Asynchronous code is code that performs an operation in the background and does not block the main thread of execution.

// The async keyword is used to define an asynchronous function, which is a function that returns a promise. An asynchronous function can contain one or more await expressions, which pause the execution of the function until the promise is resolved.

// The async and await keywords make it easier to work with asynchronous code by allowing you to write code that reads like synchronous code. They allow you to avoid the callback hell problem and make your code more readable and maintainable.

// The async and await keywords are an important part of modern JavaScript programming and are widely used in conjunction with promises and other asynchronous patterns.



// Q.7  Give an example of async/await:- 
// async function fetchData() {
//     const response = await fetch('https://example.com/data.json');
//     const data = await response.json();
//     return data;
//   }
  
//   fetchData().then((data) => console.log(data));





  






