import React from "react";
import { useNavigate } from "react-router-dom";

const SocioItem = ({ image, name, id }) => {
  const navigate = useNavigate();
  return (
    <div className="row justify-content-center align-items-center">
      <div className="col-3">
        <img className="img-fluid" rounded="true" src={image} />
      </div>
      <div className="col-5 ">
        <p
          className="fs-5 mb-0"
          onClick={(e) => {
            navigate(`/profile/${id}`);
          }}
        >
          {name}
        </p>
      </div>
    </div>
  );
};

export default SocioItem;
