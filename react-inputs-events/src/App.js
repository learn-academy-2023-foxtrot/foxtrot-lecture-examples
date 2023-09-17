import React, {useState} from "react"
import Wrestler from "./components/Wrestler"
import "./App.css"

const App = () => {

  const [userInput, setUserInput] = useState("")

  const wrestlerAlias = [
    "the Mighty",
    "the Bone Crusher",
    "the Thunderstorm",
    "the Atomic Angel",
    "the Blazing Blaze"
  ]

  const handleChange = (e) => {
    // execute the setter function
    let ranNum = Math.ceil(Math.random() * wrestlerAlias.length - 1)
    let alias = wrestlerAlias[ranNum]
    let input = e.target.value
    setUserInput(`${input} ${alias}`)
  }
  
  return(
    <>
      <h1 className="font-effect-emboss">
        Wrestler Name Generator 
      </h1>
      <input 
        type="text"
        placeholder="Please enter your name"
        onChange={handleChange}
      />
      <Wrestler userInput={userInput} />
    </>
  )
}

export default App