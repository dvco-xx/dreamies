import React, { useState, useEffect, useContext, useRef } from "react";
import "./Navbar.css";
import dreamieslogo from "../Assets/dreamieslogo2.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import nav_dropdown from "../Assets/nav_dropdown.png";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef(null);
  const dropdown_toggle = (e) => {
    if (menuRef.current) {
      menuRef.current.classList.toggle("nav-menu-visible");
      e.target.classList.toggle("open");
    }
  };
  // const checkToken = () => {
  //   if (localStorage.getItem("auth-token") === true) {
  //     window.location.replace("/");
  //   }
  // };
  // useEffect(() => {
  //   checkToken();
  // }, []);
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={dreamieslogo} alt="" />
        <p>Dr. Dreamies</p>
      </div>

      <img
        className="nav-dropdown"
        onClick={dropdown_toggle}
        src={nav_dropdown}
        alt=""
      />
      <ul ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Home
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("allproducts");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/allproducts">
            Products
          </Link>
          {menu === "allproducts" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("popular");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/popular">
            Popular
          </Link>
          {menu === "popular" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("deals");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/deals">
            Deals
          </Link>
          {menu === "deals" ? <hr /> : <></>}
        </li>
      </ul>

      <div className="nav-login-cart">
        {localStorage.getItem("auth-token") ? (
          <button
            onClick={() => {
              localStorage.removeItem("auth-token");
              window.location.replace("/");
            }}
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}

        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count ">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
