import React, {useState} from 'react';
import { Card, CardImg, CardBody, CardText, Button } from  "reactstrap"
import { NavLink } from 'react-router-dom';
import nasaPic from "../assets/nasa.png"
import norris from "../assets/norris.png"

const NasaData = () => {
  const [nasaRock, setNasaRock] = useState(null) 
  const apiKey = process.env.REACT_APP_NASA_API_KEY
  const displayPhoto = () => {
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${apiKey}`)
      .then((response) => response.json())
      .then((payload) => console.log(payload))
      .catch((error) => console.log(error))
  }

  // console.log(nasaRock)
  return(
    <>
      <h3>Nasa requires an API key</h3>
      
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
        <CardBody 
          style={{backgroundColor: "#272625", textAlign:"center"}}
        >
          <CardText 
            style={{color: "#f1f0ef", padding: "30px", fontSize:"30px"}}
          >
            {/* state variable here */}
          </CardText>
          <CardImg
            alt="Card image cap"
            src={norris}
            style={{width: 200, border:"6px ridge #00c0e9"}}
            bottom
            width="100%"
          />
        </CardBody>
        <CardImg
          alt="Card image cap"
          src={nasaPic}
          style={{height: 180}}
          bottom
          width="100%"
        />
      </Card>
    </>
  )
}