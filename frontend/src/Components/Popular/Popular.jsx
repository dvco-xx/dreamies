import React, { useState, useEffect } from "react";
import "./Popular.css";
import Item from "../Items/Item";

const Popular = () => {
  const [popularProducts, setPopularProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/todaysmenu")
      .then((response) => response.json())
      .then((data) => setPopularProducts(data));
  }, []);
  return (
    <div className="popular">
      <h1>Today's Menu</h1>
      <hr />
      <div className="popular-item">
        {popularProducts.map((item, idx) => {
          return (
            <Item
              key={idx}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
              size={item.size}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
