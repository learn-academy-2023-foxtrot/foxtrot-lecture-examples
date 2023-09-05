// JavaScript High Order Functions 9/5/2023 Foxtrot

// Vocabulary
// higher-order function
// .map()
// .filter()
// type coercion
// falsy
// truthy

// prompt: Create a function that takes in an array of the names of superheroes and returns an array with a 💥 after each name.

// pseudocode:
  // name of function: superHeroNames
  // input: array with the names pf superheroes as values
  // output: array with 💥 after each value
  // process:
    // create a variable to store an empty array (nameList)
    // iteration to perform an action to each value, for loop
    // push method to add values to the end of the empty array
    // return string interpolation to add emoji to each name

// // function expression:
// const superHero = [ "Superman", "Batman", "Wonder Woman", "Captain Marvel", "Black Panther" ]
// // () => {}: arrow function syntax
// const superHeroNames = (array) => {
//   let nameList = []
//   for(let i = 0; i < array.length; i++) {
//     // console.log(nameList.push(array[i])) // outputs the amount of values in the array
//     // console.log(nameList) // outputs the actual value
//     // concatenation
//     // nameList.push(array[i] + "💥")
//     // string interpolation
//     nameList.push(`${array[i]}💥`)
//   } return nameList
// } 

// // invoke the function
// console.log(superHeroNames(superHero))
// output:
  // [
  //   'Superman💥',
  //   'Batman💥',
  //   'Wonder Woman💥',
  //   'Captain Marvel💥',
  //   'Black Panther💥'
  // ]

  // Refactor: High order function .map()
    // high order function: function that takes in one or more functions as arguments

    // callback function: function that is passed as an argument to another function

    // .map(): allows us to transform each value of an array and returns a new array with those values
      // takes in a callback function () => {}
        // (): holds the parameter which will be either a value, index, array in that exact order.
        // =>: arrow syntax
        // {}: code block that states what to do with the designated parameter

    // // test variable
    // const superHero = [ "Superman", "Batman", "Wonder Woman", "Captain Marvel", "Black Panther" ]

    // // function expression:
    // // const superHeroNames = (array) => {
    // //   return array.map((value) => {
    // //     return `${value}💥`
    // //   })
    // // } 

    // // refactor function expression per ES6 syntax:
    // const superHeroNames = (array) => {
    //   return array.map(value => `${value}💥`)
    // } 

    // // invoke the function
    // console.log(superHeroNames(superHero))

// prompt: Create a function that takes in an array of the names of superheroes and returns an array with a 💥 after each name and states the index of each value. "0. Superman"

// pseudocode:
  // name of function: superHeroIndex
  // input: array with the names of superheroes as values
  // output: array with index number before and 💥 after each value
  // process:
    // use .map() to iterate across each value and index
    // return string interpolation to add each index and emoji to each name

  // // test variable
  // const superHero = [ "Superman", "Batman", "Wonder Woman", "Captain Marvel", "Black Panther" ]

  // // function expression
  // const superHeroIndex = (array) => {
  //   return array.map((value, index) => {
  //     return `${index}. ${value} 💥`
  //   })
  // }

  // // function invocation
  // console.log(superHeroIndex(superHero))
  // output: 
    // [
    //   '0. Superman 💥',
    //   '1. Batman 💥',
    //   '2. Wonder Woman 💥',
    //   '3. Captain Marvel 💥',
    //   '4. Black Panther 💥'
    // ]

// .filter()
// .filter(): allows us to create a subset or new array with the values that satisfy a given condition

// prompt: create a function that takes in an array and returns an array with values that do not include "man" in their name.

// test variable
const superHero = [ "Superman", "Batman", "Wonder Woman", "Captain Marvel", "Black Panther" ]

// pseudocode:
  // name of function: noMan
  // input: array
  // output: array with values that do not include "man" in their name
  // process:
    // use filter high order function (hof) to iterate across each value in the array
    // return a subset of the array that meets the specified condition
    // since .includes method would give values that are true to the condition of "man" included in the name, use the bang operator to give values that are false to the condition 
// function expression
const noMan = (array) => {
  return array.filter((value) => {
    return ! value.includes("man")
  })
}

// function call
console.log(noMan(superHero))
// output: [ 'Captain Marvel', 'Black Panther' ]