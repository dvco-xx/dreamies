import React, { useState, useEffect } from "react";
import "./AllProducts.css";
import "../Popular/Popular.css";
import Item from "../Items/Item";

const AllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((response) => response.json())
      .then((data) => setAllProducts(data));
  }, []);
  return (
    <div className="allproducts">
      <hr />
      <div className="allproducts-grid">
        {allProducts.map((item, idx) => {
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

export default AllProducts;
