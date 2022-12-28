import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { BASE_SERVER_URL } from "../config";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  // const [currentUserData, setCurrentUserData] = useState(null);

  useEffect(() => {
    axios
      .get(`${BASE_SERVER_URL}/api/auth/refresh`, {
        headers: { accesstoken: "token" },
      })
      .then((response) => {
        setCurrentUser(response.data.success ? response.data.data : null);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);


  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        // currentUserData,
        // setCurrentUserData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
