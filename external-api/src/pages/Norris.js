import React, {useState} from 'react';
import { Card, CardImg, CardBody, CardText, Button } from  "reactstrap"
import { NavLink } from 'react-router-dom';
import chuck from "../assets/chuck.png"

const Norris = () => {
  // state variables, functions
  const [chuckFacts, setChuckFacts] = useState(null)

  const displayFacts = () => {
    fetch("https://api.chucknorris.io/jokes/random?category=career")
    .then(response => response.json())
    .then(payload => setChuckFacts(payload))
    .catch(error => console.log(error))
  }
  
  const displayAnimals = () => {
    fetch("https://api.chucknorris.io/jokes/random?category=animal")
    .then(response => response.json())
    .then(payload => setChuckFacts(payload))
    .catch(error => console.log(error))
  }

  const displayDevs = () => {
    fetch("https://api.chucknorris.io/jokes/random?category=dev")
    .then(response => response.json())
    .then(payload => setChuckFacts(payload))
    .catch(error => console.log(error))
  }
  console.log("chuckFacts: ", chuckFacts)

  return(
    <>
      <NavLink to="/">
        <Button
          color="dark"
          outline
        >
          Home
        </Button>
      </NavLink>
      <br />
      <Card className="my-2">
        <CardImg
          alt="Card image cap"
          src={chuck}
          style={{height: 180}}
          top
          width="100%"
        />
        <CardBody 
          style={{backgroundColor: "#272625", textAlign:"center", padding:"10px"}}
        >
          <Button onClick={displayFacts} color="warning" outline>
            Click to learn about Chuck Awesome Career Facts
          </Button>
          <Button onClick={displayAnimals} color="warning" outline>
            Click to learn about Chuck Awesome Animal Facts
          </Button>
          <Button onClick={displayDevs} color="warning" outline>
            Click to learn about Chuck Awesome Developer Facts
          </Button>
          <CardText 
            style={{color: "#f1f0ef", padding: "30px", fontSize:"30px"}}
          >
            {chuckFacts?.value}
          </CardText>
        </CardBody>
      </Card>

    </>
  )
}

export default Norris