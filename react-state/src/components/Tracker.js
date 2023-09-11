import React, { useState } from "react"

const Tracker = () => {
  const [miles, setMiles] = useState(0)
  const [ocean, setOcean] = useState("blue")

  const addMile = () => {
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