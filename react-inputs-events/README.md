## React Inputs and Events 9/15/2023 Foxtrot 🦊

### Task
- MVP: Create a wrestler name generator
- Ice Box: Outfit suggestion

### Plan
- react functional components
- space for the user to give input
- store that user input so it can be updated with the wrestler name

1) Basic react functional component
```js
// imports
import React from "react"

// declare the react functional component
const App = () => {

  // data required for react functional component

  // returns the JSX to UI
  return(
    <>
    </>
  )
}

// make the component visible to the application
export default App
```

2) Store the user input
```js
// imports
import React, {useState} from "react"

// declare the react functional component
const App = () => {

  // data required for react functional component
  // destructure state variable and setter function from useState
  const [userInput, setUserInput] = useState("Type user name")

  // returns the JSX to UI
  return(

```

3) Obtaining the user input

- create a input field to receive user input
<input />: provides a field to allow a user to type information or interact with the input field
  - input attributes:
    type: specifies the category of the input
    value: collects the information placed in the field
    placeholder: temporary description of the expected value for the field
    onChange: event listener that will trigger the handleChange


4) Update value of the state variable to be the user input
- create a function that will execute the setter function to update the value of the state variable

- Pseudocode:
  - function name: handleChange
  - input: object (DOM event) 
  - output: string (user input)
  - process:
    - obtain the value of the user input from the event object
    - assign the user input as the value of the state variable

- function expression:
```js
// "e" stands for short hand for the DOM event
const handleChange = (e) => {
  // return something
  setUserInput(e.target.value)
}
```

- function call: 
```js
  // use the onChange attribute to perform the function call
  <input 
    type="text"
    onChange={handleChange}
  />
```

5) Wrestler Name Generator
- heading
- Create a function that will take in the user input and add a suggested wrestler name
-  the suggestion will be randomly selected from a list of wrestler aliases
```js
const wrestlerAlias = [
  "the Mighty",
  "the Bone Crusher",
  "the Thunderstorm",
  "the Atomic Angel",
  "the Blazing Blaze"
]
```
- EX. Anabella, expected output: Anabella the Bone Crusher

- Pseudocode:
  - function name: handleChange (using existing function)
  - input: object
  - output: string, the value of user input with one of the values from the array of wrestler aliases
  - process: 
    - additional steps needed
      - use Math.random() and Math.ceil() to generate a number 
      - use that number to represent the index
      - obtain a value from the array using bracket notation referencing the index
      - string interpolation to add the user input to that value
      - update the value of the state variable to be this wrestler name


DOM events: user interactions with the DOM, ex. typing, checking a box, hovering over elements
event listeners: methods that wait for specified DOM events and trigger the appropriate actions

onChange
type attributes
value attribute
handler method

