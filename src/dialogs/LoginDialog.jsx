import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";

const Login = ({ isLoginVisible, setLoginVisible, setRegisterVisible }) => {
  console.log(isLoginVisible);
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
                  SignUp
                </button>
              </label>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setLoginVisible(false)}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Login;
