import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import Container from "react-bootstrap/Container";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import userApi from "../api/user";

const INITIAL_STATE = {
  id: 0,
  details: "",
  fileId: 0,
};

const CreatePostComponent = () => {
  const [post, setPost] = useState(INITIAL_STATE);

  const { loggedInUser } = useContext(UserContext);

  useEffect(() => {
    setPost({ ...post, id: loggedInUser.id });
  }, [loggedInUser]);

  const uploadFile = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    console.log(event.target.files[0]);
    formData.append("file", event.target.files[0]);
    axios
      .post("http://localhost:8080/api/uploadFile", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(
        (response) => {
          let data = response.data;
          if (data.data) {
            setPost({ ...post, fileId: data.data.id });
          } else if (data.error) {
            console.log(data.error.message);
          }
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const posApi = (event) => {
    event.preventDefault();
    userApi.post("/post", post).then(
      (response) => {
        console.log(response);
        setPost(INITIAL_STATE);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <Container>
      <Row>
        {loggedInUser.isLoggedIn ? (
          <Col className="card mt-5 p-3 card text-white bg-dark">
            <Form.Group className="mb-3 ">
              <Form.Label>Descripton</Form.Label>
              <Form.Control
                as="textarea"
                value={post.details}
                onChange={(event) => {
                  setPost({ ...post, details: event.target.value });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3 ">
              <Form.Label>Create Post</Form.Label>
              <Form.Control
                type="file"
                onChange={(event) => {
                  uploadFile(event);
                }}
              />
            </Form.Group>

            <button
              className="btn btn-outline-light "
              variant="primary"
              type="submit"
              onClick={(e) => posApi(e)}
            >
              Submit
            </button>
          </Col>
        ) : null}
      </Row>
    </Container>
  );
};

export default CreatePostComponent;
