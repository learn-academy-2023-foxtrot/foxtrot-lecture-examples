import React, {useState} from 'react';
import { Card, CardImg, CardBody, CardText, Button } from  "reactstrap"
import chuck from "../assets/chuck.png"
export default function Norris() {
  // state variables, functions
  const [chuckFacts, setChuckFacts] = useState(null)
  
  return(
    <>
      <h3>Chuck does not require an API key</h3>
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
          style={{backgroundColor: "#272625", textAlign:"center"}}
        >
          <Button color="warning" outline>
            Click to learn about Chuck Awesome
          </Button>
          <br />
          <CardText 
            style={{color: "#f1f0ef", padding: "30px", fontSize:"30px"}}
          >
            {/* state variable here */}
          </CardText>
        </CardBody>
      </Card>
    </>
  )
}