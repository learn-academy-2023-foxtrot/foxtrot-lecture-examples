import React from "react"

const Wrestler = (props) => {
  return (
    <>
      <h2 className="font-effect-emboss">Get ready to rumble</h2>
      <h2 className="font-effect-neon"> 
        {props.userInput} 
      </h2>
    </>
  )
}

export default Wrestler