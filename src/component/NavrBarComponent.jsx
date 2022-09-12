import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LoginDialog from "../dialogs/LoginDialog";
import RegisterDialog from "../dialogs/RegisterDialog";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const NavrBarComponent = () => {
  const [isLoginVisible, setLoginVisible] = useState(false);
  const [isRegisterVisible, setRegisterVisible] = useState(false);

  const navigate = useNavigate();
  const [name, setName] = useState("");

  const { loggedInUser, searchUser } = useContext(UserContext);

  const search = () => {
    const searchedUser = searchUser(name);
    if (searchedUser) navigate(`/${searchedUser.id}`);
    else console.log("User not found");
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="./">SocioGram</Navbar.Brand>
        <Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search a User"
              className="me-2"
              aria-label="Search"
              value={name}
              exact="true"
              onChange={(event) => setName(event.target.value)}
            />
          </Form>
          <Button variant="outline-success" onClick={() => search()}>
            Search
          </Button>
        </Nav>

        <Nav>
          <p className="text fw-semibold fs-5 me-2 mb-0">Logged in as {loggedInUser.name}</p>
          <Button
            variant="outline-primary mx-2"
            onClick={() => setLoginVisible(true)}
          >
            Login
          </Button>
          <Button
            variant="outline-primary mx-2"
            onClick={() => setRegisterVisible(true)}
          >
            Register
          </Button>
          <Button
            variant="outline-danger mx-2"
            onClick={() => setLoginVisible(true)}
          >
            Logout
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
          <Button variant="outline-secondary mx-2" href="./ProfilePage">
            Profile
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavrBarComponent;
