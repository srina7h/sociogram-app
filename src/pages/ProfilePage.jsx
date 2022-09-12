import React from "react";

import Button from "react-bootstrap/Button";
import NavrBarComponent from "../component/NavrBarComponent";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const ProfilePage = () => {
  return (
    <>
      <NavrBarComponent />
      <Row>
        <Col xs={2}></Col>
        <Col>
          <Card className="flex-row">
            <Card.Img
              src={require("../assests/images/pc3.png")}
              className="w-25 ms-auto"
            ></Card.Img>
            <Card.Body>
              <Card.Title>Srinath</Card.Title>
              <Card.Text>
                <p>FACEIT!!</p>
                <Row className="Flex-row">
                  <p>Followers</p>
                  <p>2538</p>

                  <p>Following</p>
                  <p>429</p>
                </Row>

                <p>
                  <b>Email:</b> srinath@gmail.com
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Card className="text-center">
        <h2>Post</h2>
      </Card>
      <Row>
        <Col xs={2}></Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={require("../assests/images/pc1.png")}
              rounded
            />
            <Card.Body>
            <Card.Title>Post</Card.Title>
            <Card.Text>Hiii</Card.Text>
            <Button variant="primary">Like</Button>
          </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={require("../assests/images/pc1.png")}
              rounded
            />
            <Card.Body>
            <Card.Title>Post</Card.Title>
            <Card.Text>Hiii</Card.Text>
            <Button variant="primary">Like</Button>
          </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={require("../assests/images/pc1.png")}
              rounded
            />
            <Card.Body>
            <Card.Title>Post</Card.Title>
            <Card.Text>Hiii</Card.Text>
            <Button variant="primary">Like</Button>
          </Card.Body>
          </Card>
        </Col>
      </Row>
      <Button variant="primary" className="w-25" href="./">
        Back
      </Button>
    </>
  );
};

export default ProfilePage;
