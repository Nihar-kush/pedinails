import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserData, setCurrentUserData] = useState(null);
  //   useEffect(() => {
  //     const unsub = onAuthStateChanged(auth, async (user) => {
  //       setCurrentUser(user);
  //       let data = await getDoc(doc(db, "users", user.uid));
  //       if (data) {
  //         setCurrentUserData(data.data());
  //       }
  //     });

  //     return () => {
  //       unsub();
  //     };
  //   }, []);

  return (
    <AuthContext.Provider
      value={{ currentUser, currentUserData, setCurrentUserData }}
    >
      {children}
    </AuthContext.Provider>
  );
};
