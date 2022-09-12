import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import Post from "../component/PostComponent";
import FooterComponent from "../component/FooterComponent";
import FollowingCard from "../component/cards/FollowingCard";
import FollowerCard from "../component/cards/FollowerCard";
import NavrBarComponent from "../component/NavrBarComponent";
import CreatePostComponent from "../component/CreatePostComponent";
import FollowerRequestCard from "../component/cards/FollowerRequestCard";
import DummyUsersCard from "../component/cards/DummyUsersCard";

const HomePage = () => {
  return (
    <>
      <NavrBarComponent />
      <CreatePostComponent/>
      <Container>
        <Row>
          <Col className="m-4 p-3 card">
            <Post className="m-5" />
            <Post className="m-5" />
            <Post className="m-5" />
            <Post className="m-5" />
          </Col>
          <Col xs={3} className="my-4">
            <DummyUsersCard/>
            <FollowerRequestCard/>
            <FollowerCard />
            <FollowingCard />
          </Col>
        </Row>
      </Container>
      <FooterComponent />
    </>
  );
};

export default HomePage;
