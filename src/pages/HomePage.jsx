import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import React, { useState } from "react";
import LoginDialog from "../dialogs/LoginDialog";
import RegisterDialog from "../dialogs/RegisterDialog";
import Post from "../component/PostComponent";
import FooterComponent from "../component/FooterComponent";
import FollowerDialog from "../dialogs/FollowerDialog";

const HomePage = () => {
  const [isLoginVisible, setLoginVisible] = useState(false);
  const [isRegisterVisible, setRegisterVisible] = useState(false);

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">SocioGram</Navbar.Brand>
          <Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search a User"
                className="me-2"
                aria-label="Search"
              />
            </Form>
            <Button variant="outline-success">Search</Button>
          </Nav>

          <Nav>
            <FollowerDialog />
            <Button
              variant="primary mx-2"
              onClick={() => setLoginVisible(true)}
            >
              Login
            </Button>
            <Button
              variant="primary mx-2"
              onClick={() => setRegisterVisible(true)}
            >
              Register
            </Button>
            <LoginDialog
              isLoginVisible={isLoginVisible}
              setLoginVisible={setLoginVisible}
              setRegisterVisible={setRegisterVisible}
            />
            <RegisterDialog
              isRegisterVisible={isRegisterVisible}
              setRegisterVisible={setRegisterVisible}
              setLoginVisible={setLoginVisible}
            />
            <Button variant="secondary mx-2" href="./ProfilePage">
              Profile
            </Button>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Create Post</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
        </Row>
        <Row>
          <Col className="p-3">
            <Post className="m-5" />
          </Col>
          <Col xs={3}>
            <Row>
              <p>followers</p>
            </Row>
            <Row>
              <p>follwing</p>
            </Row>
          </Col>
        </Row>
      </Container>
      <FooterComponent />
    </>
  );
};

export default HomePage;
