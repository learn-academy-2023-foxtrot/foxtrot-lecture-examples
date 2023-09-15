import React, {useState} from "react"

const App = () => {

  const [userInput, setUserInput] = useState("Type user name")

  const wrestlerAlias = [
    "the Mighty",
    "the Bone Crusher",
    "the Thunderstorm",
    "the Atomic Angel",
    "the Blazing Blaze"
  ]

  const handleChange = (e) => {
    // execute the setter function
    let ranNum = Math.ceil(Math.random() * wrestlerAlias.length)
    let alias = wrestlerAlias[ranNum]
    let input = e.target.value
    setUserInput(`${input} ${alias}`)
  }
  
  return(
    <>
      <h2>
        Wrestler Name Generator 
        {userInput}
      </h2>
      <input 
        type="text"
        onChange={handleChange}
      />
    </>
  )
}

export default App