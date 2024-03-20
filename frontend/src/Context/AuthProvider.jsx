import React, { useState, createContext, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Set loading to true initially
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("auth-token");
    if (token) {
      // If a token is found in localStorage, fetch user data
      fetchUserData(token);
    } else {
      setLoading(false); // Set loading to false if no token is found
    }
  }, []);

  const fetchUserData = async () => {
    try {
      console.log("Fetching user data...");
      const token = localStorage.getItem("auth-token"); // Retrieve token from localStorage
      console.log("Token:", token);
      if (!token) {
        // If token is not found, set user to null and return
        console.log("Token not found. User set to null.");
        setUser(null);
        return;
      }

      const response = await fetch("http://localhost:5000/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const userData = await response.json();
      console.log("User data:", userData);
      if (response.ok) {
        console.log("User data fetched successfully.");
        setUser(userData);
      } else {
        console.error("Failed to fetch user data");
      }
    } catch (error) {
      console.error("Fetch user data error:", error);
    } finally {
      setLoading(false);
    }
  };

  const login = async (userData) => {
    try {
      setLoading(true);
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
        navigate("/"); // Navigate to home page after successful login
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
    setUser(null);
    localStorage.removeItem("auth-token");
    navigate("/login");
  };

  const signup = async (formData) => {
    try {
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const responseData = await response.json();
      if (responseData.success) {
        localStorage.setItem("auth-token", responseData.token);
        setUser(responseData.user);
        navigate("/"); // Navigate to home page after successful signup
      } else {
        alert(responseData.error);
      }
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, signup, loading }}>
      {loading ? (
        // Show loading indicator while fetching user data
        <div>Loading...</div>
      ) : (
        // Render children when loading is false
        children
      )}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export const useAuth = () => useContext(AuthContext);
