import React, { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [users, setUsers] = useState([]);

  const searchUser = (userName) => {
    return users.reduce((acc, curr) => {
      if (curr.name === userName) {
        acc = curr;
      }
      return acc;
    }, {});
  };

  return (
    <UserContext.Provider
      value={{
        loggedInUser,
        setLoggedInUser,
        searchUser,
        setUsers,
        users,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
