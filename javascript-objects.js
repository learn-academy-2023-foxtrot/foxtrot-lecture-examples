// JavaScript Objects 9/7/2023 Foxtrot

// Vocabulary
  // objects - collection of key:value pairs to help integrate data and behavior, unordered list
  // key:value pairs - 
    // key - also known as a symbol, can be any datatype, used to store the value
    // value - can be any datatype or method

  // object that contains properties of a pokemon
  // structure { key:value, key:value}
  // const pikachu = {
  //   pokeName: "Pikachu",
  //   type: "electric",
  //   sound: "pika-pika"
  // }

  // Accessing the object properties
    // dot notation - gives access to the values in an object by referencing the key
    // object.key
    // console.log(pikachu.pokeName) //output: Pikachu
    // console.log(pikachu.type) //output: electric
    // console.log(pikachu.sound) //output: pika-pika

  // Adding behavior to the object
    // methods - functions that belong to an object, .sort()
    // Create a method that returns a greeting that states the sound with the pokemon name.
    // Pseudocode:
      // function name: sayHello
      // input: none
      // output: string
      // process: string interpolation to reference the keys for sound and pokeName
      // expected output: "pika-pika! I'm Pikachu."
    
    // this - reference the current object
    // creating a method
      // name of function is the key
      // create function with keyword function
        // function() {}

    const pikachu = {
      pokeName: "Pikachu",
      type: "electric",
      sound: "pika-pika",
      sayHello: function() {
        return `${this.sound}! I'm ${this.pokeName}.`
      }
    }
    // console.log(pikachu.sayHello())
    // output: pika-pika! I'm Pikachu.
  
  // destructuring - allowing the key to abstract the values
  const { pokeName, type, sound} = pikachu
  // console.log(pokeName) // output: Pikachu
  // console.log(type) // output: electric
  // console.log(sound) // output: pika-pika
  
// Iteration on arrays with objects as values
const pokeDex = [
  { pokeName: "Pikachu", type: "electric", sound: "pika-pika" },
  { pokeName: "Squirtle", type: "water", sound: "squirtle-squirtle" },
  { pokeName: "Charmander", type: "fire", sound: "char-char" }
]

// Create the code the provide an array of the names of all the pokemon.
  // access the values in the array using .map() to iterate across each value
  const pokeDexNames = pokeDex.map((value) => {
    // return each value within the object by using dot notation
    return value.pokeName
  })

  console.log(pokeDexNames) 
  //Output: [ 'Pikachu', 'Squirtle', 'Charmander' ]

  // ICEBOX
    // console.log() function or method
    // destructuring the key of methods