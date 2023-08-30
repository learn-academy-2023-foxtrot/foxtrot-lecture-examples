// Javascript Intro 8/30/23 Foxtrot

// Learning Objectives
// can name the six primitive data types
// can produce boolean, string, and number data types
// can successfully run JavaScript code directly in the node terminal
// can recall the syntax of creating a variable
// can recall the definition of type coercion

// JavaScript: dynamic, interpreted, scripting language; primarily used to create interactive content on websites
  // dynamic: allows for flexibility with creating variables and giving it any data type
  // interpreted: interpreter in the browser reads over the JavaScript code line by line and runs it without the need of compiling
  // scripting: provide instructions (scripts) for an application; functionality; controls the behavior of applications

  // to run the JavaScript code: $ node <nameOfFile.js>

  // naming convention: camelCase (written without spaces, begins with a lowercase letter and the first letter of each subsequent word is capitalized)

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
    // console.log(): prints to the terminal; debugging, troubleshooting tool

// number: positive, negative, zero, whole numbers, decimals
  // float: number including a decimal point
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
  // behavior:
    // concatenation (+): combining two or more strings
      // console.log("Aloha" + "Foxtrot23🦊") // Output: AlohaFoxtrot23🦊
      // console.log("Aloha, " + "Foxtrot23🦊") // Output: Aloha, Foxtrot23🦊
  // properties
    // length property (.length): the numeric value of the amount of characters in the string, starts count with 1
      // console.log("Aloha".length) // Output: 5
      // console.log("Aloha, ".length + "Foxtrot23🦊".length) // Output: 18
      // console.log("Aloha, ".length) // Output: 7
      // console.log("Foxtrot23🦊".length) // Output: 11
      // console.log("🦊".length) // Output: 2
    // index property: numerical value that represents the position or location of a character, starts count with 0, zero indexing
      // bracket notion [] will allow you to pass an index and return the value at that index
      // "A l o h a" // spacing for visual purposes only
      // 1 2 3 4 5 ---> length
      // 0 1 2 3 4 ---> index
      // console.log("Aloha"[3]) // Question: What value is at the index of 3 in the string "Aloha"? // Output: "h"
  
  // Additional Notes: 
  
  // variable: container used to store values for a web application
    // argument: variables or values passed into a function invocation or function call

    // structure of the initial assignment of a variable:
      // variable declaration: creating a variable by specifying its name using keywords like "var," "let," or "const"
        // var - can be reassigned and redeclared
        // let - can be reassigned but not redeclared
        // const - can neither be reassigned nor redeclared
      // variable name: always communicate intent, in camelCase
      // assignment operator (=):  used to assign a value to a variable
      // value: data recognized by JS by its datatype

      // initial assignment as a string
        // var ourCohort = "Foxtrot 2023 🦊"
        // console.log(ourCohort) // Output: Foxtrot 2023 🦊
      // redeclaring variable as a number
        // var ourCohort = 2023
        // console.log(ourCohort) // Output: 2023
      // reassigning a value ---> NOTE: declaration keyword is not required when reassigning
        // ourCohort = "🦊"
        // console.log(ourCohort) // Output: 🦊

  // type coercion: automatic conversion of data types by JavaScript during operations or comparisons when using incompatible datatypes
    // console.log(2023 + "🦊") // Output: 2023🦊, concatenation occurs because JavaScript converts the number 2023 into a string

  // Boolean: true or false value, results of the evaluation within a condition
    // console.log(true) // output: true

  // undefined: indicate that a variable has been declared but has not been assigned a value
    // let instructors
    // console.log(instructors) // output: undefined
  
  // null: means nothing, represents the intentional absence of a value
    // let cohortName = null
    // console.log(cohortName) // Output: null

  // symbol: unique identifiers (keys) for objects
