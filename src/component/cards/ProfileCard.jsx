import React from 'react'

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const ProfileCard = () => {
  return (
    <Row >
        <Col xs={2}></Col>
        <Col>
          <Card className="flex-row w-75" >
            <Card.Img
              // src={require("../CreatePostComponent")}
              className="w-25 ms-auto"
            ></Card.Img>
            <Card.Body>
              <Card.Title className="m-b-0 font-light">Srinath</Card.Title>
              {/* <Button className='w-25' >Edit</Button> */}
              <Card.Text>
                <p>
                  <b>Email:</b> srinath@gmail.com
                </p>
                
                <hr />
                <div className="row text-center m-t-20">
                  <div className="col-lg-4 col-md-4 m-t-20">
                    <h3 className="m-b-0 font-light">434K</h3>
                    <large>Followers</large>
                  </div>
                  <div className="col-lg-4 col-md-4 m-t-20">
                    <h3 className="m-b-0 font-light">5454</h3>
                    <large>Following</large>
                  </div>
                </div>
                <hr />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
  )
}

export default ProfileCard