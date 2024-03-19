import React, { useState } from "react";
import { AuthContext } from "../Pages/LoginSignup";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false); // Add loading state

  const login = async (userData) => {
    try {
      setLoading(true); // Set loading to true before making the request
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const responseData = await response.json();
      if (responseData.success) {
        localStorage.setItem("auth-token", responseData.token);
        setUser(responseData.user);
        // console.log("User Data: ", responseData.user);
      } else {
        alert(responseData.error);
      }
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    // Your logout logic here
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
