
import React from "react";

import NavrBarComponent from "../component/NavrBarComponent";
import CreatePostComponent from "../component/CreatePostComponent";
import HomePagePostWrapper from "../wrapper/HomePagePostWrapper"; 

const HomePage = () => {
  return (
    <div style={{background: "radial-gradient(circle, rgba(184,186,107,1) 0%, rgba(221,219,160,1) 37%, rgba(146,200,105,1) 100%)"}}>
      <NavrBarComponent />
      <CreatePostComponent />
      <HomePagePostWrapper/>
    </div>
  );
};

export default HomePage;
