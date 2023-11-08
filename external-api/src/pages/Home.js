import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'reactstrap';
import polyFox from "../assets/polyFox.png"
export default function Home() {
  return(
    <main className='main'>
      <h1>Fetching External APIs</h1>
      <NavLink to="/chuck">
        <Button
          className='button'
          color="warning"
          outline
        >
            Chuck Norris API
        </Button>
      </NavLink>
      <NavLink to="/nasa">
        <Button
          color="info"
          outline
        >
          NASA Images API
        </Button>
      </NavLink>
      <br />
      <img className="image" src={polyFox} alt="poly foxes" width="40%"/>
    </main>
  )
}
