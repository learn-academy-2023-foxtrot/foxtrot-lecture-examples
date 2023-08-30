// Javascript Intro 8/30/23 Foxtrot

// Learning Objectives
// can name the six primitive data types
// can produce string and number data types
// can successfully run JavaScript code directly in the node terminal

// Vocabulary
// JavaScript: dynamic, interpreted, scripting language; primarily used to create interactive content on websites
// dynamic: allows for flexibility with creating variables and giving it any data type
// interpreted: interpreter in the browser reads over the JavaScript code line by line and runs it without the need of compiling
// scripting: provide instructions (scripts) for an application; functionality; controls the behavior of applications

// to run the JavaScript code: $ node <nameOfFile.js>

// naming convention: camelCase

// data types: predefined classification (categories) for the building blocks of a programming language
// primitive data type: fundamental data type that represents a single value
// number
// string
// boolean
// undefined
// null
// symbol

// composite data type: holds multiple values
// array
// object

// Each data type has individual properties aka behavior 
// built-in methods: predefined functions provided by Javascript to perform specific tasks

// number: positive, negative, zero, whole numbers, decimals
// float: number including a decimal point
// console.log(): prints to the terminal; debugging, troubleshooting tool
// console.log(42.3)

// behavior
// mathematical calculations
// console.log(4 + 8) //Output: 12
// console.log(42 * 0.2) //Output: 8.4
// exponents (**)
// console.log(4 ** 3) //Output: 64

// modulo operator (%): computes the remainder of the division between two numbers
// console.log(8 % 4) // Output: 0


// string: a sequence of characters wrapped in quotation marks ("") or ('')
// console.log("Aloha") // Output: Aloha
// console.log("Foxtrot23🦊") // Output: Foxtrot23🦊

  // concatenation (+): combining two or more strings
  // console.log("Aloha" + "Foxtrot23🦊") // Output: AlohaFoxtrot23🦊
  // console.log("Aloha, " + "Foxtrot23🦊") // Output: Aloha, Foxtrot23🦊
  
  // length property (.length): the numeric value of the amount of characters in the string, starts count with 1
  // console.log("Aloha".length) // Output: 5
  // console.log("Aloha, ".length + "Foxtrot23🦊".length) // Output: 18
  // console.log("Aloha, ".length) // Output: 7
  // console.log("Foxtrot23🦊".length) // Output: 11
  // console.log("🦊".length) // Output: 2
  
  // index: numerical value that represents the position or location of a character, starts count with 0
  // "A l o h a" // spacing for visual purposes only
  // length:  1 2 3 4 5 
  // index:   0 1 2 3 4 
  console.log("Aloha"[3]) // Question: What value is at the index of 3 in the string "Aloha"? // Output: "h"
  
  // Additional Notes: 
  // can produce boolean, string, and number data types
  // can recall the syntax of creating a variable
  // can recall the definition of type coercion
  // Boolean
  // undefined
  // null
  // symbol
  // type coercion
  // variable
  // variable declaration
  // assignment operator
  // argument