// JavaScript Conditionals

//  JavaScript conditionals - aka decision trees - aka if/else statements 
//  take an input - make an evaluation (true/false) - returns an output

//  Type of operators: Equality, Relational, and Logical

//  Equality operator -
//    Strict equality ( === ): check that BOTH the datatype AND the value 
//    Loose equality ( == ): ONLY checks the value
// JavaScript has type coersion which allows loose equality to coerce the datatype as long as the value is the same.
// Evaluation always returns a Boolean

//  Example of strict:
//    var myFavNum = 5
//    console.log(myFavNum === "5")
//    output: false
//    console.log(myFavNum === 5)
//    output: true
//  Example of loose:
//    console.log(myFavNum == "5")
//    console.log(myFavNum == 5)

//  Relational operator:
//    Less than ( < )
//    Less than or equal to ( <= )
//    Greater than ( > )
//    Greater than or equal ( >= )

//  Example of relational operator:
//    console.log(5 < 2)
//    output: false
//    console.log(5 <= 10)
//    output: true
//    console.log(14 > 4);
//    output: true
//    console.log(200 >= 200);
//    output: true

//  Logical operator:
// Evaluates statements in one condition
// Logical AND ( && ): expects that ALL are true
// Logical OR ( || ): expects that ONE is true

//  Example:
//    var myCar = "Honda"
//    console.log(myCar === "Honda" && 5 > 3)
//    output: true (because both are true)
//    console.log(myCar === "Honda" && 5 < 3)
//    output: false
//    console.log(myCar === "Honda" || 5 < 3)
//    output: true (ONE is true)

//  Structure of conditional statements:
// ( if ) is where you start ; you need to have an ( if ) to create a conditional statement
// ( if ) is a recognized keyword in JavaScript
// ( if ) will be the first to make a decision whether the condition has been met or not
// The response of a conditional is wrapped in curly braces ( { } )
// the response is the executable code - the code block

// if(condition to be met){
//   do this action (this is our code block)
// }

// if(true){
//   console.log("You are seeing this because I met the condition")
// }

// var youFavNum = 21
// if (youFavNum === 21) {
//   console.log("RTO has a really cool favorite number!")
// }
// output: RTO has a really cool favorite number!

//  Else
// ( else ) - also a keyword in JavaScript
// ( else ) will be our catch all
// it does not take conditions
// if all else fails, else has got your back

// var youFavNum = 21
// if (youFavNum > 50) {
//   console.log("That is not true at all")
// } else {
//   console.log("Please try again or put your glasses on")
// }

//  Else if
// ( else if ) - allows us to add another evaluation
// we can have as many ( else if ) as we need for our program

// var myName = "Nichole"
// var myFriend = "Charlene"
// if (myName === "Nicole") {
//   console.log("Oh hey Nicoleee!");
// } else if (myFriend === "Charlean") {
//   console.log("Howdy, Charleannnn!");
// } else {
//   console.log("I do not know you yet. What is your name again?");
// }