// JavaScript Arrays 8/31/2023

// Data types - predetermined classification of info, building blocks
// Primitive - number, boolean, string, symbol, null, undefined

// each data type has properties
// each data type has behavior, what behaviors we can do are determined by the properties

// 5 + 4
// 9
// "hello".toUpperCase()
// 'HELLO'
// 4.toUpperCase()
// VM280:1 Uncaught SyntaxError: Invalid or unexpected token
// "hello" + "!"
// 'hello!'

// variables are a representation of a thing - abstraction
// when you see a variable think about what data type it is and what properties and behaviors the data has
// 7
// 7
// var myNum = 7
// undefined
// myNum
// 7
// 7 === myNum
// true
// myNum + 3
// 10
// myNum = 4 + 3
// 7
// myNum
// 7

// arrays - data type, collections of data
// [] - array with nothing inside of it
// console.log([])
// console.log([7])
// console.log([7, 4, true, 3, 8, "hi!", null, undefined, false, [9, 4]])

// console.log([7, 4, true, 3, 8, "hi!", null, undefined].length)
// --> 8
// zero-index

// last index of the array will always be one less than the length

// console.log([7, 4, true, 3, 8, "hi!", null, undefined][0])
// --> 7

// console.log([7, 4, true, 3, 8, "hi!", null, undefined][7])
// --> undefined

// var myArray = [7, 4, true, 3, 8, "hi!", null, undefined]
// var myNum = 7

// console.log(myArray[myNum])
// console.log(myArray[7])

// assignment operator
// var myArray = [7, 4, true, 3, 8, "hi!", null, undefined]
// console.log(myArray[4])
// myArray[4] = "hey foxtrot!"
// console.log(myArray)
// --> [ 7, 4, true, 3, 'hey foxtrot!', 'hi!', null, undefined ]

// pass an argument that gets added to the end of the array
// push is a mutator
// console.log(myArray.push("hello"))
// --> 9 - returning the new length of the array
// console.log(myArray)

// myArray.reverse()
// console.log(myArray)

// removes the last item of the array
// console.log(myArray.pop())
// --> 7 - returning the element it removed from the array
// console.log(myArray)

// console.log(myArray.indexOf(true))
// --> 5
// console.log(myArray)

// mutator methods - permanently modify the code they are called on
// accessor methods - don't modify the code

var myArray = [7, 4, true, 3, 8, "hi!", null, undefined]
// var mySecondArray = ["yo", "hey", "hi"]
// var combinedArray = myArray.concat(mySecondArray)
// console.log("combined", combinedArray)
// console.log("first array", myArray)
// console.log("second array", mySecondArray)

// fun test case 1)
// console.log(typeof myArray.length)
// console.log(myArray.length + 7)

// fun test case 2)
// console.log(myArray.indexOf(false))
// --> -1

// if (myArray.indexOf(true) === -1) {
//   console.log("sorry, doesn't exist")
// } else {
//   console.log("yay it exists!")
// }

// fun test case 3)
var myString = "hey foxtrot"
// console.log(myString.reverse())
// TypeError: myString.reverse is not a function
// console.log(myString.split())
// --> [ 'hey foxtrot' ]
// console.log(myString.split().length)

// console.log(myString.split(""))
// --> ["h", "e", "y", " ", "f", "o", "x", "t", "r", "o", "t"]

// console.log(myString.split("").reverse())
// --> [ 't', 'o', 'r', 't', 'x', 'o', 'f', ' ', 'y', 'e', 'h']

// console.log(myString.split("").reverse().join())
// --> t,o,r,t,x,o,f, ,y,e,h

console.log(myString.split("").reverse().join(""))
// --> tortxof yeh
