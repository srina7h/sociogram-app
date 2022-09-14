import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import userApi from "../api/user";

const Login = ({ isLoginVisible, setLoginVisible, setRegisterVisible }) => {
  const navigate = useNavigate();
  const { setLoggedInUser } = useContext(UserContext);
  const [login, setLogin] = useState({ name: "", password: "" });
  console.log(isLoginVisible);
  const loginAPI = (event) => {
    event.preventDefault();

    userApi
      .post(`/auth/login`, {
        name: login.name,
        password: login.password,
      })
      .then((res) => {
        if (res.data.data) {
          let loggedInUser = res.data.data;
          loggedInUser.isLoggedIn = true;
          setLoggedInUser(loggedInUser);
          setLoginVisible(false)
        } else if (res.data.error) {
          console.log(res.data.error.message);
        } else {
          console.log("Something went wrong");
        }
      })
      .catch((error) => {
        console.log(`Error -> ${error}`);
      });

  };
  return (
    <div>
      <Modal show={isLoginVisible} onHide={() => setLoginVisible(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Login Page</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3 mt-3">
              <label className="form-label">Name:</label>
              <input
                type="name"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                name="name"
                onChange={(event) => {
                  setLogin({ ...login, name: event.target.value });
                }}
              />
            </div>
            <div className="mb-3">
              <label for="pwd" className="form-label">
                Password:
              </label>
              <input
                type="password"
                className="form-control"
                id="pwd"
                placeholder="Enter password"
                name="pswd"
                onChange={(event) => {
                  setLogin({ ...login, password: event.target.value });
                }}
              />
            </div>
            <div className="form-check mb-3">
              <label className="form-check-label">
                <button
                  type="button"
                  className="btn btn-link"
                  onClick={() => {
                    setLoginVisible(false);
                    setRegisterVisible(true);
                  }}
                >
                  New User Register
                </button>
              </label>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="outline-primary"
            onClick={(event) => loginAPI(event)}
          >
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Login;
