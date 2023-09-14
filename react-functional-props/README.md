# React Functional Props 14Sep23 FOXTROT

### Prompt
Create an interactive food ordering system application.

### Planning:
- Restaurant name: Foxtrot Krabby Platter
- Build functional component
```jsx
// imports
import React from "react"

// declaration of the React functional component
const App = () => {
  // data needed for React functional component will exist between declaration and return

  // return statement JSX to the UI, when the return has multiple lines encapsulated in (<> </>)
  return(
    <>

    </>
  )
}

export default App
```

- We will need State since the values will be changing 
```jsx
import React, {useState} from "react"
```
```jsx
const [menu, setMenu] = useState([
  {entree: "sponge patty", amount: 0},
  {entree: "krabby patty", amount: 0},
  {entree: "squidwurst and sauerkraut", amount: 0},
  {entree: "patrick tots", amount: 0}])
```

- How do we want to display this data?
things we know - we are working with an ARRAY
- ( .map ) will allow us to iterate through our array in order to display our menu items
- goal: entree with amount
> sponge patty -- amount: 0

Process:
Step 1) React component that stores all the entries with the amount sold and displays the data to the UI
```jsx 
import React, { useState } from "react"

const App = () => {
  const [menu, setMenu] = useState([
    { entree: "sponge patty", amount: 0 },
    { entree: "krabby patty", amount: 0 },
    { entree: "squidwurst and sauerkraut", amount: 0 },
    { entree: "patrick tots", amount: 0 }
  ])

  return(
    <>
      <h1>Foxtrot Krabby Platter</h1>
      <h2>{menu[0].entree} -- amount: {menu[0].amount}</h2>
    </>
  )
}

export default App
```

Step 2) Refactor redundant code  
To show all the entrees we would have to repeat the line of code with the entree and amount sold 4 times  

D.R.Y. - Don't repeat yourself

Use .map() to repeat that display for each entree and amount sold  

```jsx
  // .map() to iterate across objects and display data using dot notation
  // <ul>
  //   {menu.map((item) => {
  //     return <li> {item.entree} -- amount: {item.amount} </li>
  //   })}
  // </ul>

  // ES6 syntax allows the removal of {return } if return one thing
  // <ul>
  //   {menu.map(item => 
  //     <li> {item.entree} -- amount: {item.amount} </li>
  //   )}
  // </ul>

  // Because React needs a unique key identifier for all the items in a list that are displayed, we will assign the index of each value in the array to the key property. `key={index}`. Remember to assess the index parameter from map()
  <ul>
    {menu.map((item, index) =>
      <li key={index}> {item.entree} -- amount: {item.amount} </li>
    )}
  </ul>
```

Step 3) Separate the concerns
### container component:
> what is going to be controlling the logic of your app (all of the data) - i.e custom functions, state variables, etc.  
> aka logic components / state components
> dependent on data from other components  
> also shares data to other components  
> whole working logic   
*App.js will be our container component*

### presentational component:
> this is the how the code will be displayed to the user interface  
> dealings with the styling or presenting the data on the UI  
> aka display components / stateless components  
*nested components will be our presentational components*

#### nested presentational component: MenuItem  
- create a components folder under `src`
- create a file named `MenuItem.js`
```jsx
import React from "react"

const MenuItem = () => {
  return (
    <>
    
    </>
  )
}

export default MenuItem
```

Step 4) Pass props to presentational component and place display logic on it    
- MenuItem will allow us to display our menu items
- place .map() display logic on this presentational component
```jsx
  <ul>
    {menu.map((item, index) =>
      <li key={index}> {item.entree} -- amount: {item.amount} </li>
    )}
  </ul>
```
#### Container Component
> - App.js will import our nested component (MenuItem)  
```js
import MenuItem from "./components/MenuItem"
```
> - On App.js, we have to do a Component Call of the nested presentational component (MenuItem)
> - remember to pass the menu data as props to the nested component
> - App.js will have props passed inside of the component call as an attribute
```jsx
  return(
    <>
      <h1>Foxtrot Krabby Platter</h1>
      <MenuItem menu={menu} />
    </>
  )
```
#### Presentational Component
> - MenuItem.js will accept the props as a parameter (props)
> - special thing about props is that it is stored as an object (we need to use dot notation to access which value we will need `props.menu`)
```jsx
  const MenuItem = (props) => {
  // console.log("props", props)
  return (
    <>
      <ul>
        {props.menu.map((item, index) =>
          <li key={index}> {item.entree} -- amount: {item.amount} </li>
        )}
      </ul>
    </>
  )
}
```

### updating the amount when an item is sold
- logic for our behavior 
- create a function on container component (App.js) that will execute the setState method  
Pseudocode:    
**function name** - increaseAmount    
**input** - number (represent the index from the menu array to update that item)    
**output** - increase the amount value + 1  
**process** 
  - create a button to trigger the function call with the argument of the index of the object within the array
  - the index will be used in dot notation to reference the key of the applicable object to update its value
  - the setter function will update the menu state variable with this new amount

#### Container component
> - Create function on App.js
> - Pass it as a prop to MenuItem.js
```jsx
  // this function will take in the index from our menu array in state to target the item amount we want modify.
  const increaseAmount = (index) => {
    // then using dot notation access the amount to increment by 1 (shorthand = += 1) vs the longhand menu[index].amount = menu[index].amount + 1
    menu[index].amount += 1
    // this will then update our menu item state variable to a copy of the array with the updated values
    setMenu([...menu])
  }

  return(
    <>
      <h1>Foxtrot Krabby Platter</h1>
      <MenuItem menu={menu} increaseAmount={increaseAmount} />
    </>
  )
```

#### Presentational component
> - Create a button with onClick() attribute to trigger the function  
> - Since the function is expecting an argument, allow the map() to share the index as an argument to the function.  
> - Remember to either use an anonymous function to prevent the increaseAmount() function from self invoking thus creating a stack overflow.
```js
  <ul>
    {props.menu.map((item, index) =>
      <div key={index}>
        <li > {item.entree} -- amount: {item.amount} </li>
        <button onClick={() => props.increaseAmount(index)}>Increase Amount</button>
      </div>
    )}
  </ul>
```  


