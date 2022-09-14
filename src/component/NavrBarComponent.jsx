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
  const navigate = useNavigate();
  const [isLoginVisible, setLoginVisible] = useState(false);
  const [isRegisterVisible, setRegisterVisible] = useState(false);

  const [name, setName] = useState("");

  const { loggedInUser, searchUser, setLoggedInUser } = useContext(UserContext);

  const search = () => {
    const searchedUser = searchUser(name);
    if (searchedUser) navigate(`/${searchedUser.id}`);
    else console.log("User not found");
  };

  return (
    <Navbar className="card text-white bg-dark" bg="light" expand="lg">
      <Container>
        <Link to="/">
          <Navbar.Brand className="text-white">SocioGram</Navbar.Brand>
        </Link>
        {/* <Nav> */}
          {/* <Form className="d-flex">
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
          <Button variant="success" onClick={() => search()}>
            Search
          </Button> */}
        {/* </Nav> */}

        <Nav>
          <p className="text fw-semibold fs-5 me-2 mb-0">
            Logged in as {loggedInUser.name}
          </p>

          {loggedInUser.isLoggedIn ? (
            <>
              <Button
                variant="danger mx-2"
                onClick={() =>
                  setLoggedInUser({
                    id: 2,
                    name: "",
                    isLoggedIn: false,
                  })
                }
              >
                Logout
              </Button>

              <Button
                variant="secondary mx-2"
                onClick={(e) => {
                  e.preventDefault();
                  console.log(loggedInUser);
                  navigate(`/profile/${loggedInUser.id}`);
                }}
              >
                Profile
              </Button>
            </>
          ) : (
            <>
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
            </>
          )}
        </Nav>
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
      </Container>
    </Navbar>
  );
};

export default NavrBarComponent;
