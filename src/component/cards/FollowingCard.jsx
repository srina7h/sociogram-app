import React from "react";
import Card from "react-bootstrap/Card";
import SocioItem from "../SocioItem";

import profileImage from "../../assests/images/Profile1.png";

const FollowingCard = () => {
  return (
    <>
      <Card className="p-1 pb-3 my-2">
        <div className="container">
          <h2 className="fs-4 my-2">Following</h2>
          <hr />
          <SocioItem
            name="Srinath"
            image={profileImage}
          />
          <SocioItem
            name="Srinath"
            image={profileImage}
          />
          <SocioItem
            name="Srinath"
            image={profileImage}
          />
          <SocioItem
            name="Srinath"
            image={profileImage}
          />
          <SocioItem
            name="Srinath"
            image={profileImage}
          />
        </div>
      </Card>
    </>
  );
};

export default FollowingCard;
