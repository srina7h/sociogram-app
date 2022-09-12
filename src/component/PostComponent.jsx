import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/esm/Image";
const Post = () => {
  return (
    <>
      <Card className="w-75 m-auto my-3">
        <Card className='d-flex'>
          <Card.Img variant="top" src={require("../assests/images/pc1.png")} />
          <Card.Body>
            <Card.Title>Post</Card.Title>
            <Card.Text>Hiii</Card.Text>
            <Button variant="primary">Like</Button>
          </Card.Body>
        </Card>
      </Card>

    </>
  );
};

export default Post;
