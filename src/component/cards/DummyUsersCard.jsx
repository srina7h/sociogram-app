import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import SocioItem from "./SocioItem";

import profileImage from "../../assests/images/Profile1.png";
import userApi from "../../api/user";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const UsersCard = () => {
  const [users, setUsers] = useState([]);

  const { loggedInUser } = useContext(UserContext);

  useEffect(() => {
    userApi
      .get(`/auth/all`)
      .then((res) => {
        console.log(res.data);
        if (res.data.data) {
          setUsers(res.data.data);
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
      {loggedInUser.isLoggedIn ? (
        <Card className="p-1 pb-3 mb-2 card text-white bg-transparent border-dark">
          <div className="container">
            <h2 className="fs-4 my-2 dummy">Users</h2>
            <hr />
            {users.map((user) => (
              <SocioItem name={user.name} id={user.id} image={profileImage} />
            ))}
          </div>
        </Card>
      ) : null}
    </>
  );
};

export default UsersCard;
