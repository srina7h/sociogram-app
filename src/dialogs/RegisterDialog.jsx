import React from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const RegisterDialog = ({ isRegisterVisible, setRegisterVisible,setLoginVisible }) => {
  return (
    <div>
      <Modal show={isRegisterVisible} onHide={() => setRegisterVisible(false)}>
        <Modal.Header closeButton>
          <Modal.Title>SignIn Page</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="/action_page.php">
            <div class="mb-3 mt-3">
              <label class="form-label">
                Name:
              </label>
              <input
                type="name"
                class="form-control"
                id="name"
                placeholder="Enter your name"
                name="name"
              />
            </div>
            <div class="mb-3 mt-3">
              <label for="email" class="form-label">
                Email:
              </label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Enter your mail"
                name="mail"
              />
            </div>
            <div class="mb-3">
              <label for="pwd" class="form-label">
                Password:
              </label>
              <input
                type="password"
                class="form-control"
                id="pwd"
                placeholder="Enter password"
                name="pswd"
              />
            </div>
            <div class="form-check mb-3">
            <label className="form-check-label">
                <button
                  type="button"
                  className="btn btn-link"
                  onClick={() => {
                    setRegisterVisible(false);
                    setLoginVisible(true);
                  }}
                >
                  Already a user
                </button>
              </label>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setRegisterVisible(false)}>
            SignIn
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default RegisterDialog;
