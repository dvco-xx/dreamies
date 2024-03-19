import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./CSS/LoginSignup.css";

// Create a new context
const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Call useAuth hook to get login function
  const { login } = useAuth();

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (userToken) => {
    setUser(userToken);
    localStorage.setItem("auth-token", userToken);
    login(formData);
    // window.location.replace("/");
    navigate("/");
  };
  // const login = async (req, res) => {
  //   console.log("login function executed", formData);
  //   let responseData;
  //   await fetch("http://localhost:4000/login", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/form-data",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(formData),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => (responseData = data));
  //   if (responseData.success) {
  //     localStorage.setItem("auth-token", responseData.token);
  //     window.location.replace("/");
  //   } else {
  //     alert(responseData.error);
  //   }
  // };
  const signup = async () => {
    console.log("signup function executed", formData);
    let responseData;
    await fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));
    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.error);
    }
  };
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Sign Up" ? (
            <input
              type="text"
              name="username"
              value={formData.username}
              placeholder="Your name"
              onChange={changeHandler}
            />
          ) : (
            <></>
          )}
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="email address"
            onChange={changeHandler}
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            placeholder="password"
            onChange={changeHandler}
          />
        </div>
        <button onClick={state === "Login" ? handleLogin : signup}>
          Continue
        </button>
        {state === "Sign Up" ? (
          <p className="loginsignup-login">
            Already have an account?{" "}
            <span
              onClick={() => {
                setState("Login");
              }}
            >
              Login here
            </span>
          </p>
        ) : (
          <p className="loginsignup-login">
            Create an account{" "}
            <span
              onClick={() => {
                setState("Sign Up");
              }}
            >
              Click here
            </span>
          </p>
        )}

        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>
            By clicking continue, I consent to the terms of use and privacy
            policy.
          </p>
        </div>
      </div>
    </div>
  );
};

// Export the AuthContext
export { AuthContext };
export default LoginSignup;
