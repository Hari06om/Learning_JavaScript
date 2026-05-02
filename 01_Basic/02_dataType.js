"use Strict "; //treat all js code as newer version

// code readable should be high


//Data types in js
//1. String
//2. Number
//3. Boolean
//4. Null
//5. Undefined
//6. Symbol (new in ES6)

//String


let name = "Hari om Verma";
let age = 22;
let isLoggedIn = false;
let state;
console.log(typeof name);
console.log(typeof age);
console.log(typeof isLoggedIn);
console.log(typeof state);

//number => 2 to pwr 53
//bigint 
// symbol => unique and immutable data type
//boolean => true or false
// null => empty value
// undefined => variable declared but not assigned any value

// symbol => unique and immutable data type
let id = Symbol("123");
let id2 = Symbol("123");
console.log(id === id2); // false, because each symbol is unique


// object => collection of key value pairs

// array => ordered collection of values

// js me data type dynamically change ho sakta hai


console.log(typeof name);
