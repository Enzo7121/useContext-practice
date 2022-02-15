import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(false);

  const logIn = () => setUser(!user);

  return (
    <UserContext.Provider value={{ user, logIn }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
