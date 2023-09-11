// importing our useState hook from React 
import React, { useState } from "react"

const Tracker = () => {
  // our State variable declaration of miles with our set method that allows us to update our miles
  // instantiating our initial value or our 
  const [miles, setMiles] = useState(0)
  // our state variable of ocean holding the value of the color that I want to use in my inline styling later
  const [ocean, setOcean] = useState("blue")

  // addMile function will allow me to update my state variable miles
  const addMile = () => {
    // updates my miles state
    setMiles(miles + 1)
  }
  return (
    <>
      <p style={{ color: ocean }}> Miles: {miles} </p>
      <button onClick={addMile} style={{ backgroundColor: "pink" }}> Add a mile </button>
    </>
  )
}

export default Tracker