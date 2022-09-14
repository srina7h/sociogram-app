import React, { useContext, useEffect, useState } from "react";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import PostComponent from "../component/PostComponent";
import userApi from "../api/user";
import { Link, useParams } from "react-router-dom";

const ProfilePagePostWrapper = () => {
  let params = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log(params);
    if (params.id !== undefined) {
      userApi
        .get(`/post/${params.id}`)
        .then((res) => {
          if (res.data.data) {
            console.log(res.data);
            setPosts(res.data.data);
          } else if (res.data.error) {
            console.log(res.data.error.message);
          } else {
            console.log("Something went wrong");
          }
        })
        .catch((error) => {
          console.log(`Error -> ${error}`);
        });
    }
  }, []);

  return (
    <>
      <h2 className="text-center w-100 mt-5">Post</h2>
      <div className="container">
        <div className="row">
          {posts.length > 0 ? (
            posts.map((post) => <PostComponent post={post} />)
          ) : (
            <p>NO post to show</p>
          )}
        </div>
      </div>
    </>
  );
};

export default ProfilePagePostWrapper;
