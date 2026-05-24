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

// define every type of datatype in javascript with example and explaination
// 1. String: A sequence of characters enclosed in quotes. Example: "Hello, World!" - This is a string literal.
// 2. Number: Represents both integer and floating-point numbers. Example: 42 - This is a number literal.
// 3. Boolean: Represents a logical entity that can have two values: true or false. Example: true - This is a boolean literal.
// 4. Null: Represents the intentional absence of any object value. Example: null - This is a null literal.
// 5. Undefined: Represents an uninitialized variable or a variable that has been declared but not assigned a value. Example: undefined - This is an undefined literal.
// 6. Symbol: Represents a unique identifier, often used for object properties. Example: Symbol('description') - This creates a new symbol with the description 'description'.
// 7. Object: A collection of properties, where each property is a key-value pair. Example: { name: "Alice", age: 30 } - This is an object literal with two properties, name and age.

// Example of type conversion in javascript with  console.log statements
let str = "123";
console.log(typeof str); // string

let num = Number(str);
console.log(typeof num); // number
console.log(num); // 123

let bool = Boolean(num);
console.log(typeof bool); // boolean
console.log(bool); // true

let nullVal = null;
console.log(typeof nullVal); // object (this is a known quirk in JavaScript)
let undefinedVal = undefined;
console.log(typeof undefinedVal); // undefined

let sym = Symbol('description');
console.log(typeof sym); // symbol
