import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import userApi from "../api/user";

const RegisterDialog = ({
  isRegisterVisible,
  setRegisterVisible,
  setLoginVisible,
}) => {
  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
  });

  const registerAPI = (event) => {
    event.preventDefault();

    userApi
      .post(`/auth/register`, {
        name: register.name,
        email: register.email,
        password: register.password,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.data) {
          setRegisterVisible(false);
          setLoginVisible(true);
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
      <Modal show={isRegisterVisible} onHide={() => setRegisterVisible(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Register Page</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="/action_page.php">
            <div className="mb-3 mt-3">
              <label className="form-label">Name:</label>
              <input
                type="name"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                name="name"
                onChange={(event) => {
                  setRegister({ ...register, name: event.target.value });
                }}
              />
            </div>
            <div className="mb-3 mt-3">
              <label for="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your mail"
                name="mail"
                onChange={(event) => {
                  setRegister({ ...register, email: event.target.value });
                }}
              />
            </div>
            <div className="mb-3">
              <label for="pwd" classname="form-label">
                Password:
              </label>
              <input
                type="password"
                className="form-control"
                id="pwd"
                placeholder="Enter password"
                name="pswd"
                onChange={(event) => {
                  setRegister({ ...register, password: event.target.value });
                }}
              />
            </div>
            <div className="form-check mb-3">
              <label className="form-check-label">
                <button
                  type="button"
                  className="btn btn-link"
                  onClick={() => {
                    setRegisterVisible(false);
                    setLoginVisible(true);
                  }}
                >
                  Already a user Login
                </button>
              </label>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={(event) => registerAPI(event)}>
            SignIn
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default RegisterDialog;
