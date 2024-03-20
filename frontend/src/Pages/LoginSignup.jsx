import React, { useState } from "react";
import { useAuth } from "../Context/AuthProvider";
import "./CSS/LoginSignup.css";

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const { login, signup, loading } = useAuth();

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    login(formData);
  };

  const handleSignup = () => {
    signup(formData);
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
          ) : null}
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
        <button onClick={state === "Login" ? handleLogin : handleSignup}>
          {loading ? "Loading..." : "Continue"}
        </button>
        {state === "Sign Up" ? (
          <>
            <p className="loginsignup-login">
              Already have an account?{" "}
              <span onClick={() => setState("Login")}>Login here</span>
            </p>
            <div className="loginsignup-agree">
              <input type="checkbox" name="" id="" />
              <p>
                By clicking continue, I consent to the terms of use and privacy
                policy.
              </p>
            </div>
          </>
        ) : (
          <p className="loginsignup-login">
            Create an account{" "}
            <span onClick={() => setState("Sign Up")}>Click here</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
