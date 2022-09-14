import React, { useState } from "react";
import { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/esm/Image";
import LikeComponent from "../component/LikeComponent";

const Post = ({ post }) => {
  console.log(post);
  return (
    <div className="col-3">
      <Card className="w-100 m-auto my-3 ">
        <Card className="d-flex ">
          <Card.Img
            variant="top"
            src={`data:image/jpeg;base64,${post.image}`}
          />
          <Card.Body>
            <Card.Title>{post.details}</Card.Title>
            {/* <LikeComponent /> */}
          </Card.Body>
        </Card>
      </Card>
    </div>
  );
};

export default Post;
