import React, {useState} from 'react';
import { Card, CardImg, CardBody, CardText, Button } from  "reactstrap"
import { NavLink } from 'react-router-dom';
import nasaPic from "../assets/nasa.png"
import norris from "../assets/norris.png"

const NasaData = () => {
  const [nasaRock, setNasaRock] = useState(null) 
  const [nasaIndex, setNasaIndex] = useState(0)

  const apiKey = process.env.REACT_APP_NASA_API_KEY
 
  const displayPhoto = () => {
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${apiKey}`)
    .then((response) => response.json())
    .then((payload) => setNasaRock(payload))
    .then(() => setNasaIndex(Math.floor(Math.random() * nasaRock?.photos?.length)))
    .catch((error) => console.log(error))
  }

  const srcInfo = nasaRock?.photos[nasaIndex]?.img_src
  const cameraName = nasaRock?.photos[nasaIndex]?.camera?.full_name
  const dateTaken = nasaRock?.photos[nasaIndex]?.earth_date
  const roverName = nasaRock?.photos[nasaIndex]?.rover.name
  
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
      <Card className="my-2" onClick={displayPhoto}>
        <CardBody 
          style={{backgroundColor: "#272625", textAlign:"center"}}
        >
          <CardText 
            style={{color: "#f1f0ef", padding: "30px", fontSize:"30px"}}
          >
            Photo from {roverName} using {cameraName} received on {dateTaken}
          </CardText>
          { srcInfo ?
            <CardImg
              alt="Card image cap"
              // replace src with nasa data
              src={srcInfo}
              style={{width: 300, border:"6px ridge #00c0e9"}}
              bottom
              width="100%"
            /> :
            <CardImg
              alt="Card image cap"
              // replace src with nasa data
              src={norris}
              style={{width: 200, border:"6px ridge #00c0e9"}}
              bottom
              width="100%"
            />
          }
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

export default NasaData