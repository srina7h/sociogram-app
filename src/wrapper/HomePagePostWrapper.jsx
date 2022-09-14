import React, { useEffect, useState } from "react";

import FollowerWrapper from "../wrapper/FollowerWrapper";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import userApi from "../api/user";
import Container from "react-bootstrap/Container";
import Post from "../component/PostComponent";

const HomePagePostWrapper = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    userApi
      .get(`/post/all`)
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
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <div className="container">
              <div className="row">
                {posts.map((post) => (
                  <>
                    <Post className="m-5" post={post} />
                  </>
                ))}
                ;
              </div>
            </div>
          </div>
          <div className=" col-3 my-4">
            <FollowerWrapper />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePagePostWrapper;
