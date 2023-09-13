import React, { useState } from "react"
import Episode from "./components/Episode"
import Player from "./components/Player"
import "./App.css"

const App = () => {
  const episodes = [
    "Building Projects to Learn",
    "Headless Commerce with Open Source",
    "A Friendly Guide to Software Development",
    "Next Generation App Deployments",
    "ChatGPT and AI: Initial Reactions",
    "Write Boring Code",
    "All-in-one API Lifecycle with Treblle"
  ]
  const [currentEpisode, setCurrentEpisode] = useState(episodes[0])
  // console.log("currentEpisode:", currentEpisode)

  const triggerNextEpisode = () => {
    let nextEpisode = episodes.indexOf(currentEpisode) + 1
    setCurrentEpisode(episodes[nextEpisode]) // serves the same purpose as a return
    console.log(nextEpisode)
  }

  return (
    <>
      <h1>Compressed.fm Clone</h1>

      <Player
        currentEpisode={currentEpisode}
        triggerNextEpisode={triggerNextEpisode}
      />

      <div className="episode-cards">
        {episodes.map((episode, index) => {
          return <Episode title={episode} key={index} />
        })}
      </div>
    </>
  )
}

export default App
