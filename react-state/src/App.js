import React from "react"
// importing our Tracker component file from components folder
import Tracker from "./components/Tracker"
// importing our CSS from our CSS file
import "./App.css"

// we are working in functional components (our function)
const App = () => {
  // every function needs a return of ONE thing
  return (
    // React Fragments allow us to pass one fragment with endless nested items inside
    <>
      {/* header for my app */}
      <h2 className="header"> Foxtrot Running Club </h2>
      {/* header for each month / tracker */}
      <h3> January: </h3>
      {/* component call */}
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