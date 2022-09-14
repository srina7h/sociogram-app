import React from "react";

import NavrBarComponent from "../component/NavrBarComponent";
import ProfileCard from "../component/cards/ProfileCard";
import ProfilePagePostWrapper from "../wrapper/ProfilePagePostWrapper";

const ProfilePage = () => {
  return (
    <>
      <div
        style={{
          background:
            "radial-gradient(circle, rgba(184,186,107,1) 0%, rgba(221,219,160,1) 37%, rgba(146,200,105,1) 100%)",
        }}
      >
        <NavrBarComponent />
        <ProfileCard />
        <ProfilePagePostWrapper />
      </div>
    </>
  );
};

export default ProfilePage;
