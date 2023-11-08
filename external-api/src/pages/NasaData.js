import React, {useState} from 'react';
import { Card, CardImg, CardBody, CardText, Button } from  "reactstrap"
import nasaPic from "../assets/nasa.png"
import norris from "../assets/norris.png"

export default function NasaData() {
  return(
    <>
      <h3>Nasa requires an API key</h3>
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