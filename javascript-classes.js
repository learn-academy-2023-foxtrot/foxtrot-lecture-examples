// JavaScript Classes 9/7/2023 Foxtrot

// class: the blueprint for creating objects in JavaScript
  // syntax for a class
    // keyword class, name of the class in PascalCase, {}
    // class NameOfClass {}

  // structure of class with constructor and custom methods
  // class PokemonTrainer {
  //   // required properties for each object
  //   constructor() {}
  //   // custom methods
  //   method1() {}
  //   method2() {}
  // }
  // constructor() {}
    // constructor - special method that gets called when creating a new object.

// object: an individual instance of a class

// Prompt: Create a PokemonTrainer class with the following properties: name of the trainer (trainerName) and how many poke balls that trainer has (pokeBall). Provide a space to store the collection of pokemon (pokeDex).
// use keyword this to reference the properties that belong to the current object
  // class PokemonTrainer {
  //   constructor(trainerName, pokeBall) {
  //     this.trainerName = trainerName;
  //     this.pokeBall = pokeBall;
  //     this.pokeDex = []
  //   }
  // }
  // console.log(PokemonTrainer) //output: [class PokemonTrainer]

// create an object, instantiating the class
  // new - a method used with the class name to create a new object 
  // console.log(new PokemonTrainer("Char Ketchum", 50))
  // output:
  // PokemonTrainer {
  //   trainerName: 'Char Ketchum',
  //   pokeBall: 50,
  //   pokeDex: []
  // }

// adding a custom method
// class PokemonTrainer {
//   constructor(trainerName, pokeBall) {
//     this.trainerName = trainerName;
//     this.pokeBall = pokeBall;
//     this.pokeDex = []
//   }

//   // catch a pokemon
//   // Pseudocode:
//     // name: pokeCatch
//     // input: string, name parameter pokemon
//     // output: array
//     // process: .push() - to add given pokemon to the poledex array
//   pokeCatch(pokemon) {
//     this.pokeDex.push(pokemon)
//   }
// }

// instantiate the class
// const ilene = new PokemonTrainer("Ash", 5)
// console.log(ilene)
// output: PokemonTrainer { trainerName: 'Ash', pokeBall: 5, pokeDex: [] }
// ilene.pokeCatch("Growlithe")
// console.log(ilene)
// output: 
  // PokemonTrainer {
  //   trainerName: 'Ash',
  //   pokeBall: 5,
  //   pokeDex: [ 'Growlithe' ]
  // }

  // refactor the method to deduct a pokeball after capturing a pokemon
  class PokemonTrainer {
    constructor(trainerName, pokeBall) {
      this.trainerName = trainerName;
      this.pokeBall = pokeBall;
      this.pokeDex = []
    }
  
    // catch a pokemon
    pokeCatch(pokemon) {
      this.pokeDex.push(pokemon)
      this.pokeBall = this.pokeBall - 1
    }
  }

  // create an object
  const louis = new PokemonTrainer("Brock", 4)
  // console.log(louis)
  // output: PokemonTrainer { trainerName: 'Brock', pokeBall: 4, pokeDex: [] }
  louis.pokeCatch("Onyx")
  console.log(louis)
  // output:
    // PokemonTrainer {
    //   trainerName: 'Brock',
    //   pokeBall: 3,
    //   pokeDex: [ 'Onyx' ]
    // }
