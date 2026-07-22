import { createContext, useState } from "react";

export const Auth = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedInData, setLoggedInData] = useState(
    JSON.parse(localStorage.getItem("loggedInData")) || false
  );

  const [registerData, setRegisterData] = useState(
    JSON.parse(localStorage.getItem("registerData")) || []
  );

  return (
    <Auth.Provider
      value={{
        loggedInData,
        setLoggedInData,
        registerData,
        setRegisterData,
      }}
    >
      {children}
    </Auth.Provider>
  );
};
