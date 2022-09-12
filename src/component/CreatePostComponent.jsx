import React from 'react'

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const CreatePostComponent = () => {
  return (
    <Container>
        <Row>
          <Col className="card mt-5 p-3">
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Create Post</Form.Label>
              <Form.Control type="file" />
              <textarea />
            </Form.Group>
          </Col>
        </Row>
      </Container>
  )
}

export default CreatePostComponent