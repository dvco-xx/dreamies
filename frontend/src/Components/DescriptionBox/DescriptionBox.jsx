import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nam,
          voluptates quidem facilis assumenda delectus quaerat quam
          exercitationem et minima porro suscipit ad recusandae quisquam quos,
          cumque modi dolor culpa?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nam,
          voluptates quidem facilis assumenda delectus quaerat quam
          exercitationem et minima porro suscipit ad recusandae quisquam quos,
          cumque modi dolor culpa?
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
