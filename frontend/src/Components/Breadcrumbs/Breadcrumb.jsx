import React from "react";
import "./Breadcrumb.css";
import arrow_icon from "../Assets/breadcrum_arrow.png";
import { Link } from "react-router-dom";

const Breadcrumb = (props) => {
  const { product } = props;
  if (!product) {
    return <div>Loading...</div>; // Add loading state
  }
  return (
    <div className="breadcrumb">
      <Link to={"/"}> Home </Link>
      <img src={arrow_icon} alt="" /> <Link to={"/allproducts"}>Shop</Link>
      <img src={arrow_icon} alt="" />
      {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  );
};

export default Breadcrumb;
