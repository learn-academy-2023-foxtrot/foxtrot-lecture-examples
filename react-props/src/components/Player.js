import React from "react"

const Player = (props) => {
  console.log("props:", props)
  return (
    <>
      <h3>Currently playing: {props.currentEpisode}</h3>
      <button onClick={props.triggerNextEpisode}>Next Episode</button>
    </>
  )
}

export default Player
