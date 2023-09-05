// Functions Loops and Arrays
// Functions - dynamic and reusable ; need to be invoked; will always return one thing;
// console(log) - dev tool that will allow devs to see the work in progress; user will not see this 
// return - "final product";

// Create a function that will multiply each number in an array by 5.


// pseudocode:
// input: array of numbers
// output: each value multiplied by 5
// create a function named mult5 that will iterate through my array and multiply each value by 5. Return an array with new values.

// arrays cannot be multiplied
// const mult5 = (array) => {
//   return array * 5
// }
// console.log(mult5(firstArray));
// output: NaN

// My loop can access the array
// const mult5 = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     console.log(array[i])
//     // logs the values of the array
//   }
// }
// console.log(mult5(firstArray));
// returning undefined because our function is not returning anything yet

// const mult5 = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     console.log(array[i] * 5)
//     // logs the values of the array
//   }
// }
// console.log(mult5(firstArray));

// return inside of the array
// const mult5 = (array) => {
//   let storageArray = []
//   for (let i = 0; i < array.length; i++) {
//     storageArray.push(array[i] * 5)
//     return storageArray
//   }
// }
// console.log(mult5(firstArray));
// output: [ 5 ]

// var firstArray = [1, 2, 3, 4, 5]
// var secondArray = [10, 20, 30, 40, 50]
// var thirdArray = [3, 5, 7]

// const mult5 = (array) => {
//   let storageArray = []
//   for (let i = 0; i < array.length; i++) {
//     storageArray.push(array[i] * 5)
//   }
//   return storageArray
// }

// console.log(mult5(firstArray));
// // output: [ 5, 10, 15, 20, 25 ]
// console.log(mult5(secondArray))
// // [ 50, 100, 150, 200, 250 ]
// console.log(mult5(thirdArray));
// // [ 15, 25, 35 ]
// console.log(mult5([24, 222, 5, 60, 72]));
// // [ 120, 1110, 25, 300, 360 ]






// Create a function that will take an array of cohort names and return them in a string.

// pseudocode:
// input: array of strings
// output: string
// create a function iPhone that will take an array of names, iterate through, and return them string interpolated into a groupchat together.
// var contacts = ["Adrian", "Tori", "Shaun", "Mal"]

// const iPhone = (array) => {
//   let groupChat = []
//   for (let i = 0; i < array.length; i++) {
//     groupChat.push(`${array[i]} has now entered the groupchat!`)
//   }
//   return groupChat
// }
// console.log(iPhone(contacts))
// [
//   'Adrian has now entered the groupchat!',
//   'Tori has now entered the groupchat!',
//   'Shaun has now entered the groupchat!',
//   'Mal has now entered the groupchat!'
// ]


// create a function that will take an array and return the even numbers in a new array.
var givenArray = [1, 3, 5, 7, 11, 10, 26, 30, 22]

// pseudocode:
// input: array
// output: array of even numbers
// create a function called onlyEvensEver that will take an array iterate through to only return teh even numbers ... ever

const onlyEvensEver = (array) => {
  let evenNumbers = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenNumbers.push(array[i])
    }
  }
  return evenNumbers
}
// console.log(onlyEvensEver(givenArray));
// [ 10, 26, 30, 22 ]
// console.log(onlyEvensEver([13, 22, 55, 67, 59,]));