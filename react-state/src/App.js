import React from "react"
import Tracker from "./components/Tracker"
import "./App.css"

const App = () => {

  return (
    <>
      <h2 className="header"> Foxtrot Running Club </h2>
      <h3> January: </h3>
      <Tracker />
      <h3> February: </h3>
      <Tracker />
      <h3> March: </h3>
      <Tracker />
      <h3> April: </h3>
      <Tracker />
      <h3> May: </h3>
      <Tracker />
      <h3> June: </h3>
      <Tracker />
    </>
  )
}

export default App