import React from "react";

const SocioItem = ({ image, name }) => {
  return (
    <div className="row justify-content-center align-items-center">
      <div className="col-3">
        <img className="img-fluid" roundedcircle='true' src={image}  />
      </div>
      <div className="col-5 ">
        <p className="fs-5 mb-0">{name}</p>
      </div>

      <div className="col-3">
        <button className="btn btn-primary btn-sm">Follow</button>
      </div>
    </div>
  );
};

export default SocioItem;
