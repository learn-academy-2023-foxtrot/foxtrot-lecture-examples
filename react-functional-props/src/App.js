import React, { useState } from "react"
import MenuItem from "./components/MenuItem"

const App = () => {
  const [menu, setMenu] = useState([
    { entree: "sponge patty", amount: 0 },
    { entree: "krabby patty", amount: 0 },
    { entree: "squidwurst and sauerkraut", amount: 0 },
    { entree: "patrick tots", amount: 0 }
  ])

  const increaseAmount = (index) => {
    menu[index].amount += 1
    setMenu([...menu])
  }

  return(
    <>
      <h1>Foxtrot Krabby Platter</h1>
      <MenuItem menu={menu} increaseAmount={increaseAmount} />
    </>
  )
}

export default App