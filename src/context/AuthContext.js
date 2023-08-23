import React, { createContext, useState, useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// Create a new context
const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    // Check if loginToken is present in localStorage

    const loginToken = localStorage.getItem("loginToken");
    const expirationTimeCheck = localStorage.getItem("expirationTime");
    if (loginToken && expirationTimeCheck) {
      const expirationTime = JSON.parse(localStorage.getItem("expirationTime"));
      const currentDate = new Date();
      const currentTime = currentDate.getTime();

      if (expirationTime <= currentTime) {
        localStorage.removeItem("loginToken");
        localStorage.removeItem("user");
        localStorage.removeItem("expirationTime");
      } else {
        setAuth(true);
        navigate(pathname);
      }
    }

    // it the user is login
    if (auth) {
      if (pathname === "/" || pathname === "/register") {
        navigate("/dashboard");
      }
    }
  }, [auth, navigate, pathname]);

  const logout = () => {
    localStorage.removeItem("loginToken");
    localStorage.removeItem("user");
    localStorage.removeItem("expirationTime");

    setAuth(false);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ auth, logout, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useContextAPI = () => {
  return useContext(AuthContext);
};
