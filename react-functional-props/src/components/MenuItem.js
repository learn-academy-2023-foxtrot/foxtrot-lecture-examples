import React from "react"

const MenuItem = (props) => {
  // console.log("props", props)
  return (
    <>
      <ul>
        {props.menu.map((item, index) =>
          <div key={index}>
            <li > {item.entree} -- amount: {item.amount} </li>
            <button onClick={() => props.increaseAmount(index)}>Increase Amount</button>
          </div>
        )}
      </ul>
    </>
  )
}

export default MenuItem