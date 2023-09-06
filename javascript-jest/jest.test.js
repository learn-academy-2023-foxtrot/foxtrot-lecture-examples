// Javascript Testing with Jest 9/6/23 Foxtrot

// PROCESS
  // $ git checkout -b javascript-jest
  // create a project directory to hold all the code snippets: $ mkdir javascript-jest
  // $ cd javascript-jest/
  // create the testing file: $ touch jest.test.js
  // $ code .
  // use yarn to add the jest software to the project: $ yarn add jest

// PACKAGE MANAGERS
  // node package manager (npm): created for Node.js, help install dependencies across different machines
  // Yet Another Resource Negotiator (yarn): package manager developed by Facebook to replace npm due to its slow load time and security breaches

// TEST DRIVEN DEVELOPMENT
  // Input. What is the value you are passing into a method or function?
  // The result you received. What value did you receive from invoking your function?
  // The expected output. What was supposed to happen because of the input?

  // RED-GREEN-REFACTOR PROCESS
    // Write the test
    // See the test fail
    // Write the code
    // See the test pass
    // Refactor, if necessary

    // Prompt: Create a function named greeter that returns the string Aloha, Foxtrot23!!!

    // 1. Write the test: use the describe() method to group the tests together. It takes two parameters: a string that lists the name of the function and a callback function.
      // describe("greeter", () => {})

      // nested within call back function of the describe() method is an it() method. This method takes two parameters: a string that describes what the function is doing and a call back function.
      // describe("greeter", () => {
      //   it("returns a string that says Aloha, Foxtrot23!!!", () => {})
      // })

      // nested within the call back function of the it() method will be the expect() method. This method will contain the function call
      // describe("greeter", () => {
      //   it("returns a string that says Aloha, Foxtrot23!!!", () => {
      //     expect(greeter())
      //   })
      // })

      // appended to the end of the expect() is a jest matcher method that compares the expected output to the actual output of the function call.
      describe("greeter", () => {
        it("returns a string that says Aloha, Foxtrot23!!!", () => {
          expect(greeter()).toEqual("Aloha, Foxtrot23!!!")
        })
      })

    // 2. See the test fail: look for good failure
      // Run the testing suite: $ yarn jest
      // Good failure  
        // FAIL  ./jest.test.js
        // ReferenceError: greeter is not defined

    // 3. Write the code: create code that will make the test pass
      // Create pseudocode and the function expression

      // Prompt: Create a function named greeter that returns the string Aloha, Foxtrot23!!!

      // Pseudocode:
        // name of the function: greeter
        // input: none
        // output: string, Aloha, Foxtrot23!!!
        // process: make a self-invoking function

      // // Function Expression:
      // const greeter = () => {
      //   return "Aloha, Foxtrot23"
      // }

    // 4. See the test pass
      // Run the testing suite: $ yarn jest
      // Fail (printout):
        // FAIL  ./jest.test.js
        // expect(received).toEqual(expected) // deep equality
        // Expected: "Aloha, Foxtrot23!!!"
        // Received: "Aloha, Foxtrot23"

      // Corrected Function Expression:
      const greeter = () => {
        return "Aloha, Foxtrot23!!!"
      }
      // Success (printout):
        // PASS  ./jest.test.js

    // 5. Refactor, if necessary
      // Look for redundant code or a method that will reduce the lines of code we are using
      // not required for this example

// Multiple expect statements
  // Prompt: Create a function that returns different statements about soup based on a yes or no answer. If yes, "Prepare your spoon for the soup." If no, "Either your soup is dry, or your food is soggy." 

  // TEST
    // Write the test
    describe("soup", () => {
      it("returns different statements about soup based on a yes or no answer", () => {
        expect(soup("yes")).toEqual("Prepare your spoon for the soup.")
        expect(soup("no")).toEqual("Either your soup is dry, or your food is soggy.")
        expect(soup("23yusohjbjb")).toEqual("Please enter yes or no.")
      })
    })

    // See the test fail
      // Good failure (printout)
        // ReferenceError: soup is not defined --> expected because there is not a function called soup on the file

    // Write the code
      // Pseudocode:
        // name of the function: soup
        // input: two strings, "yes" and "no"
        // output: string based on the input 
        // process: conditional statements to return the string based on "yes" or "no"

      // function expression:
        // const soup = (string) => {
        //   if(string === "yes") {
        //     return "Prepare your spoon for the soup."
        //   } else {
        //     return "Either your soup is dry, or your food is soggy."
        //   }
        // }

    // See the test pass
      // Success -->  PASS  ./jest.test.js

    // Refactor, if necessary
    // ensure that all edge cases are covered
    const soup = (string) => {
      if(string === "yes") {
        return "Prepare your spoon for the soup."
      } else if(string === "no") {
        return "Either your soup is dry, or your food is soggy."
      } else {
        return "Please enter yes or no."
      }
    }

// Using variables
// Prompt: Create a function that takes in two arrays and adds the second array to the first array. It returns the values in the combined array in ascending order.
// NOTE: Place variables within the test so that all the data needed for the test is encapsulated by the call back function of the it() method.
// Write the test
describe("combinedSoup", () => {
  it("combining the values of two arrays in ascending order", () => {

    // variables
    let soupList = ["chicken noodle", "loaded baked potato", "beef ramen", "beef stew"]
    let moreSoup = ["bowl of cereal"]
    // expected output: ["beef ramen", "beef stew", "bowl of cereal", "chicken noodle", "loaded baked potato"]

    expect(combinedSoup(soupList, moreSoup)).toEqual(["beef ramen", "beef stew", "bowl of cereal", "chicken noodle", "loaded baked potato"])
  })
})

// See the test fail
  // Good failure --> ReferenceError: combinedSoup is not defined

// Write the code
  // Pseudocode
    // name of the function: combinedSoup
    // input: two arrays, multipleSoups, oddSoups
    // output: one array with the values in ascending order
    // process: 
      // add the arrays together (.push() was outputting a number or .concat() combined the values)
      // organize the values in ascending order (.reverse(): placed the values in reverse order or .sort())

  // function expression: 
  // const combinedSoup = (multipleSoups, oddSoups) => {
  //   let united = multipleSoups.concat(oddSoups)
  //   // console.log to see the status of the data, make sure it is above the return. This printout will be at the top of the test suite.
  //     // console.log("united:", united)
  //     // output: 
  //       // united: [
  //       //   'chicken noodle',
  //       //   'loaded baked potato',
  //       //   'beef ramen',
  //       //   'beef stew',
  //       //   'bowl of cereal'
  //       // ]
  //   return united.sort()
  // }

// See the test pass
//  PASS  ./jest.test.js

// Refactor, if necessary
  // chain methods together and return one line
  const combinedSoup = (multipleSoups, oddSoups) => {
    return multipleSoups.concat(oddSoups).sort()
  }