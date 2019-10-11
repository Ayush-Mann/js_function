// Write the below function in five different forms. i.e
// 1. Function Decleration
// 2. Function Expression
// 3. Arrow Function Without Curly Braces
// 4. Arrow Function With Curly Braces
// 5. Function Invocation

// Example Start
/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

//Function Decleration
function convertToString(n) {
  return String(n);
}

// Function Expression
let convertToString1 = function(n) {
  return String(n);
};

// Arrow Function
let convertToString = n => String(n);


// Arrow Function With Curly Bracket

let convertToString = n => {
  return String(n);
};

// Function Invocation

convertToString(21); // "21"

// Example End

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */
//Function Decleration
function addOne(n) {
  return +n+1;
}
// Function Expression
let addOne = function(n) {
  return +n+1;
};

// Arrow Function
let addOne = n => +n+1;

// Arrow Function With Curly Bracket

let addOne = n => {
  return +n+1;
};

// Function Invocation

addOne(21);

//-----------------------------------------------------------------------------------------------------------------------//
/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 * 
 * 
 * 
 */
//Function Decleration
function subOne(n) {
  return +n-1;
}
// Function Expression
let subOne = function(n) {
  return +n-1;
};

// Arrow Function
let subOne = n => +n-1;

// Arrow Function With Curly Bracket

let subOne = n => {
  return +n-1;
};

// Function Invocation

subOne(21);
//---------------------------------------------------------------------------------------------------------------------------//
/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */
//Function Decleration
function add(x, y) {
  return +x+y;
}
// Function Expression
let add = function(x, y) {
  return +x+y;
};

// Arrow Function
let add = (x, y) => +x+y;

// Arrow Function With Curly Bracket

let add = (x,y) => {
  return +x+y;
};

// Function Invocation

add(2, 1);


//---------------------------------------------------------------------------------------------------------------------------//
/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */

//Function Decleration
function sub(x, y) {
  return +x-(+y);
}
// Function Expression
let sub = function(x, y) {
  return +x-(+y);
};

// Arrow Function
let sub = (x, y) => +x-(+y);

// Arrow Function With Curly Bracket

let sub = (x, y) => {
  return +x-(+y);
};

// Function Invocation

sub(2, 1);
//----------------------------------------------------------------------------------------------------------------------------//
/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */

//Function Decleration
function mul(x, y) {
  return +x*(+y);
}
// Function Expression
let mul = function(x, y) {
  return +x*(+y);
};

// Arrow Function
let mul = (x, y) => +x*(+y);

// Arrow Function With Curly Bracket

let mul = (x, y) => {
  return +x*(+y);
};

// Function Invocation

mul(2, 1);
//-----------------------------------------------------------------------------------------------------------------------------//
/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */
//Function Decleration
function div(x, y) {
  return +x/(+y);
}
// Function Expression
let div = function(x, y) {
  return +x/(+y);
};

// Arrow Function
let div = (x, y) => +x/(+y);

// Arrow Function With Curly Bracket

let div = (x, y) => {
  return +x/(+y);
};

// Function Invocation

div(2, 1);
//------------------------------------------------------------------------------------------------------------------------//
/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */
//function declaration

function mulit(x) {
  return (+x)*(+x);
}
// Function Expression
let mulit = function(x, y) {
  return (+x)*(+x);
};

// Arrow Function
let mulit = (x, y) => (+x)*(+x);

// Arrow Function With Curly Bracket

let mulit = (x, y) => {
  return (+x)*(+x);
};

// Function Invocation

mulit(2, 1);
//---------------------------------------------------------------------------------------------------------//

/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */
   //Function Decleration
   function ops(operation, x, y){
    if(operation == "add"){
      let addNo = (x + y);
      return (`${x} + ${y} = ${addNo}`);
    }
    else if(operation == "sub"){
      let subNo = (x - y);
      return (`${x} - ${y} = ${subNo}`);
    }
    else if(operation == "mul"){
      let mulNo = (x * y);
      return (`${x} * ${y} = ${mulNo}`);
    }
    else {
      return (`${x} / ${y} = ${x/y}`);
    }
  }
  
  // Function Expression
  let ops = function (operation, x, y){
    if(operation == "add"){
      let addNo = (x + y);
      return (`${x} + ${y} = ${addNo}`);
    }
    else if(operation == "sub"){
      let subNo = (x - y);
      return (`${x} - ${y} = ${subNo}`);
    }
    else if(operation == "mul"){
      let mulNo = (x * y);
      return (`${x} * ${y} = ${mulNo}`);
    }
    else {
      return (`${x} / ${y} = ${x/y}`);
    }
  }
    
  
  // Arrow Function With Curly Bracket
  let ops = (operation, x, y) => {
    if(operation == "add"){
      let addNo = (x + y);
      return (`${x} + ${y} = ${addNo}`);
    }
    else if(operation == "sub"){
      let subNo = (x - y);
      return (`${x} - ${y} = ${subNo}`);
    }
    else if(operation == "mul"){
      let mulNo = (x * y);
      return (`${x} * ${y} = ${mulNo}`);
    }
    else {
      return (`${x} / ${y} = ${x/y}`);
    }
  } ;
  
  // Function Invocation
  ops("sub", 4, 4); //0
 //---------------------------------------------------------------------------------------------------//
/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 * 
 */
// function declaration
function check(a, b){
  if (a> b){
    return(`${a} is larger than ${b}`);
  }
  // else {
  //   return(`${b} is `)
  // }
}
//function expression 
let check = function(a, b){
  if (a> b){
    return(`${a} is larger than ${b}`);
  }
}
//Arrow function 
let check = (x, y) => {
  return(`${a} is larger than ${b}`)
};
//function invocation
check(3, 1);

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */

/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */

/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */

/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */

/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */

/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 * 
 */
