import React from "react";
import "./Offers.css";
import ogk from "../Assets/ogk.png";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers!</h1>
        <p>Get the best deals!</p>
        <button>Browse Offers</button>
      </div>
      <div className="offers-right">
        <img src={ogk} alt="" />
      </div>
    </div>
  );
};

export default Offers;
