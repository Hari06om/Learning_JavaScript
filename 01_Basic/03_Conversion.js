let a = "2" ; // declare variable a and assign it the string value "2"

console.log(typeof a); // print the type of a, expected "string"
console.log(typeof (a)); // print the type of a again using parentheses

let b = Number(a); // convert the string value in a to a number and assign to b
console.log(typeof b); // print the type of b, expected "number"

let l = 1; // declare variable l and assign it the numeric value 1

console.log(typeof l); // print the type of l, expected "number"

let n = Boolean(l); // convert the number value in l to a boolean and assign to n
console.log(typeof n); // print the type of n, expected "boolean"
console.log( n); // print the type of n, expected "boolean"

// Basic arithmetic operations
console.log(1+2); // 3 - addition of two numbers
console.log(1-2); // -1 - subtraction of two numbers
console.log(1*2); // 2 - multiplication of two numbers
console.log(1/2); // 0.5 - division of two numbers
console.log(1%2); // 1 - modulo (remainder) operation

// String concatenation with implicit type conversion
console.log("1"+2); // "12" - string "1" concatenated with number 2 (converts 2 to string)
console.log(1+"2"); // "12" - number 1 concatenated with string "2" (converts 1 to string)
console.log(1+1+"2"); // "22" - addition of 1+1=2 first, then concatenates with string "2"
console.log("1"+1+2); // "112" - concatenation of "1"+1="11", then "11"+2="112"

