// JavaScript Loops
// iteration - process of repeating a task until a condition is met
// for loops - do not inherently connect with arrays
// we can use the counting action from a for loop to access indexes inside arrays

// Variable scopes and Declarations:
// var - global scope; accessible inside and outside of your { code block }
// let - available ONLY inside of your { code block }; CAN be reassigned
// const - CANNOT be reassigned / redeclared

// Examples:
// if (true) {
//  var myName = "Nicole"
//  console.log(myName);
// output: Nicole (from inside of the code block)
// }
// console.log(myName)
// output: Nicole (from outside of the code block)

// if (true) {
//  let myName = "Nicole"
//  console.log(myName)
// output: Nicole
// }
// console.log(myName)
// output: ReferenceError: myName is not define

// Anatomy of a loop:
// Information needed to create a for loop:
//  - where to start
//  - where to stop
//  - how we want to get from start to stop 

// Longhand version:
for (let index = 0; index < 10; index = index + 1)
  //         start here  stop here    count by 1
  // Shorthand version:
  for (let i = 0; i < 10; i++)

    for (let i = 0; i < 10; i++) {
      console.log(i)
    }
// output: 0 1 2 3 4 5 6 7 8 9

// Infinite loop:
// for (let i = 1; i > 0; i++) {
//   console.log(i)
// }
// ctrl + c - to stop
// inifinite loops occur when a condition is not met and will go on until stopped or a stack overflow occurs
// stack overflow - when computer memory can no longer execute the code 

// Arrays and Loops:
// arrays start at index 0
// arrays have a length property
// once we identify an index - we can then extract it's value

// Examples:
// const numsArray = [1, 2, 3, 4, 5]
// console.log("nums array length", numsArray.length)
// output: 5 *we can then see that I want my loop to stop at 5, because that is the length of my given array*
// hard coded
for (let i = 0; i < 5; i++) {
  console.log("index", i)
  console.log("value", numsArray[i])
}

// dynamic
for (let i = 0; i < numsArray.length; i++) {
  console.log("index", i)
  console.log("value", numsArray[i])
}

// Logic with Loops:
// Create a loop that will ONLY return odd numbers
const numsArray = [1, 2, 3, 4, 5]
for (let i = 0; i < numsArray.length; i++) {
  if (numsArray[i] % 2 !== 0) {
    console.log(`${numsArray[i]} is an odd number`)
  }
}
// output: 1 is an odd number, 3 is an odd number, 5 is an odd number