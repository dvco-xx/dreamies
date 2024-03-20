import React from "react";
import "./Hero.css";
import arrow_icon from "../Assets/arrow.png";
import sherbet from "../Assets/sherbet.png";
import { useAuth } from "../../Context/AuthProvider";

const Hero = () => {
  const { user } = useAuth();
  console.log("user: ", user);
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>*New Arrivals Only*</h2>
        <div>
          <div className="hero-hand-icon">
            <p>Fresh</p>
          </div>
          <p>Food 🥦</p>
          <p>For Everyone!</p>
        </div>
        <div className="hero-latest-btn">
          <div>Browse Menu</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-username">
        {user && (
          <p>
            <span> 🟢 </span>
            {user.name}
          </p>
        )}
      </div>

      <div className="hero-right">
        <img src={sherbet} alt="" />
      </div>
    </div>
  );
};

export default Hero;
