# Foxtrot Running Club

- A simple React app that will allow us to track the number of miles that Foxtrot runs per month.

### Breakdown
> 1. Header - to provide good UX/UI for our users

> 2. Current number of miles - a dynamic way to keep temporary storage (useState) of miles per month

> 3. Button - in order to update our miles as we go (provides us with a way to use our logic)

> 4. Styles - AFTER the MVP (most viable product) is met 

### Keep in mind
-> Data needs to be stored in a way that it can be accessed throughout the component and updated when necessary.

-> The data is managed by a special function called a React hook.

-> useState() is method specific to React that defines a variable and its initial value as well as creating a method that can be called to update that value as needed.
```jsx
import React, { useState } from "react"
```
```jsx
const [miles, setMiles] = useState(0)
```

### Ways to style
-> Inline styling: 
```jsx
<p style={{ backgroundColor: "pink" }}>
```

-> App.css:
```jsx
// on App.js
import "./App.css"
<h2 className="header">
```
```jsx
// on App.css
.header {
  background-color: green;
}
```

-> Dynamic styling:
```jsx
const [ocean, setOcean] = useState("blue")
// this will extract "blue" from the state variable
<p style={{ color: ocean }}>
```
OR
```jsx
const ocean = useState("blue")
// this will extract "blue" from the variable
<p style={{ color: ocean }}>
```