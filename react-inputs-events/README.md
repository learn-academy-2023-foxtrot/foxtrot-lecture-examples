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

#### Create a input field to receive user input
`<input />`: provides a field to allow a user to type information or interact with the input field
  - input attributes:
    - type: specifies the category of the input
    - value: collects the information placed in the field
    - placeholder: temporary description of the expected value for the field
    - onChange: event listener that will trigger the handleChange


4) Update value of the state variable to be the user input
#### Create a function that will execute the setter function to update the value of the state variable

- **Pseudocode:**
  - function name: handleChange
  - input: object (DOM event) 
  - output: string (user input)
  - process:
    - obtain the value of the user input from the event object
    - assign the user input as the value of the state variable

- **Function expression:**
```js
// "e" short hand for the DOM event
const handleChange = (e) => {
  // return something
  setUserInput(e.target.value)
}
```

- **Function call:**
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

- Pseudocode: (modifying existing function)
  - function name: handleChange (using existing function)
  - input: object
  - output: string, the value of user input with one of the values from the array of wrestler aliases
  - process: 
    - obtain the value of the user input from the event object
    - assign the user input as the value of the state variable
    - additional steps needed
      - use Math.random() and Math.ceil() to generate a number ***NOTE: Because ceil rounds up, subtract the length by one to ensure that numbers will properly represent the index***
      - obtain a value from the array using bracket notation referencing the number as an index
      - string interpolation to add the user input to that value
      - update the value of the state variable to be this wrestler name

***Additional Notes***  
6) Separate concerns
  - App.js: container component
    - react state
    - handleChange() function
    - custom functions

  - Wrestler.js: presentational component
    - display logic for the wrestler name

  - App.css: styling

#### nested presentational component: Wrestler.js  
- create a components folder under `src`
- create a file named `Wrestler.js`
```jsx
  import React from "react"

  const Wrestler = () => {
    return (
      <>
      
      </>
    )
  }

  export default Wrestler
```
- Wrestler will allow us to display our wrestler name

#### Container Component
> - App.js will import our nested component (Wrestler)  
```js
import Wrestler from "./components/Wrestler"
```
> - Do a Component Call of the nested presentational component (Wrestler)
> - remember to pass the userInput data as props to the nested component
> - Add placeholder attribute to the input tag to inform the user to type their name
```jsx
  return(
    <>
      <h1> Wrestler Name Generator </h1>
      <input 
        type="text"
        placeholder="Please enter your name"
        onChange={handleChange}
      />
      <Wrestler userInput={userInput} />
```

#### Presentational Component
> - Wrestler.js will accept the props as a parameter (props)

```jsx
  const Wrestler = (props) => {
  // console.log("props", props)
  return (
    <>
      {props.userInput}
    </>
  )
}
```

#### Styling
> - References: 
>   - [Multiple Backgrounds](https://www.w3schools.com/css/css3_backgrounds.asp)
>   - [Font Effects](https://www.w3schools.com/css/css3_backgrounds.asp)
> - import App.css on the App.js to allow styling to be shared throughout the application


#### VOCAB
- DOM events: user interactions with the DOM, ex. typing, checking a box, hovering over elements
- event listeners: methods that wait for specified DOM events and trigger the appropriate actions
- onChange: event listener that listens for the DOM events on the input field
- type attributes: specifies the type of input
- value attribute: specifies the current value of the input
- handler method: response to the DOM event

