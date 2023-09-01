// Javascript Functions 9/1/2023 Foxtrot

// function: a self-contained block of code that performs a specific task and can be re-used multiple times throughout a web application, job is to return something (output) based on the input

// input => output

// encapsulation: the practice of encapsulating or bundling code within functions to isolate and organize it

// ES6 style function expression: defining a function by assigning it to a variable, making the function a value that can be stored, passed around, or invoked in the code

// ES6 Function expression structure
  // const: declare the variable with const so the variable cannot be reassigned nor re-declared
  // functionName: camelCase, descriptive name
  // =: assignment operator, single equal
  // () => {}: arrow function
    // (): parenthesis, space that the function accepts inputs
    // =>: arrow syntax, describes the function
    // {}: code block, logic or statements enclosed within curly braces
  // return: keyword to tell the function what needs to be returned (expected output)
  // functionName(): function call or invoke the function or function invocation, name of the variable with ()

  // pseudocode: writing out the logic of the function in natural language without worrying about the exact syntax of a programming language

  // algorithms: detailed step by step instructions 

  // prompt: a question

  // name of the function
  // function signature: input and output of the function
  // process: brainstorming an idea to complete the task

  // Prompt: Create a function that returns a greeting "Let's get ready to rumble, Foxtrot!!!"
  // name: greeter
  // input: none
  // output: string, "Let's get ready to rumble, Foxtrot!!!"
  // process: self-invoking function

  // basic structure of a function
    // const greeter = () => {}

    // self-invoking function expression
    // const greeter = () => {
    //   return("Let's get ready to rumble, Foxtrot!!!")
    // }

    // function call
    // console.log(greeter())
    // output: Let's get ready to rumble, Foxtrot!!!

    // function expression with an input
      // parameter: inputs for the function expression, variable acting as a place holder

    // prompt: Create a function that takes in a wrestler's name and returns a question asking if you would enter the ring with that wrestler.

    // pseudocode
    // function name: wrestlingMatch
    // input: wrestlerName (string)
    // output: string, Would you enter the ring with that <wrestlerName>?
    // process: use string interpolation to reference the variable to reflect the given wrestler name

    // function expression
    // const wrestlingMatch = (wrestlerName) => {
    //   return `Would you enter the ring with ${wrestlerName}?`
    // }

    // function call
    // console.log(wrestlingMatch())
    // output: Would you enter the ring with undefined? ---> undefined because the input is missing (argument)
    // argument: input or value given to the function call

    // console.log(wrestlingMatch("Steve Austin"))
    // output: Would you enter the ring with Steve Austin?

// function expression with multiple parameters
// prompt: Create a function that takes in a wrestler's name and their signature move and returns a statement that the wrestler has defeated many opponents with the signature move.

// pseudocode
// function name: signatureMove
// input: 2 parameter that are strings --> wrestlerName, signMove
// output: string, The <wrestlerName> has defeated many opponents with the <signMove>.
// process: string interpolation to abstract the value from the variable

// function expression
// const signatureMove = (wrestlerName, signMove) => {
//   return `${wrestlerName} has defeated many opponents with the ${signMove}.`
// }

// // function call
// console.log(signatureMove("Steve Austin", "Stone Cold Stunner"))
// output: Steve Austin has defeated many opponents with the Stone Cold Stunner.

// function expression with additional logic
// prompt: Create a function that takes in a wrestler's name and their signature move and returns a statement that the wrestler has defeated many opponents with the signature move. Function will also return an emoji based on the wrestler's name;
// Steve Austin --> 🥫
// The Rock ---> 🤨
// Hulk Hogan ---> 💪🏻

// pseudocode:
// function name: iconStatement
// input: 2 parameter that are strings --> wrestlerName, signMove
// output: string, <emoji> The <wrestlerName> has defeated many opponents with the <signMove>. <emoji>
// process: 
  // string interpolation to abstract the value from the variable
  // use conditional statements to determine which emoji to include in the message

// function expression
  const iconStatement = (wrestlerName, signMove) => {
    if(wrestlerName === "Steve Austin") {
      return `🥫 ${wrestlerName} has defeated many opponents with the ${signMove}.`
    } else if(wrestlerName === "Hulk Hogan") {
      return `💪🏻 ${wrestlerName} has defeated many opponents with the ${signMove}.`
    } else if(wrestlerName === "The Rock") {
      return `🤨 ${wrestlerName} has defeated many opponents with the ${signMove}.`
    } 
  }

  // function call
  console.log(signatureMove("Steve Austin", "Stone Cold Stunner"))
  console.log(signatureMove("The Rock", "People's Elbow"))
  console.log(signatureMove("Hulk Hogan", "Atomic Leg Drop"))

  // cohort challenge: provide a refactor that incorporates the dry principle (Don't Repeat Yourself)


