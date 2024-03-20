import { React, useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart, removeFromCart } = useContext(ShopContext);
  if (!product) {
    return <div>Loading...</div>; // Add loading state
  }
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        {/* <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div> */}
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ₦{product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ₦{product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          nobis maiores libero soluta consequatur? Dolore praesentium distinctio
          porro maxime repudiandae impedit!
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>small</div>
            <div>medium</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <div className="productdisplay-buttons">
          <button
            onClick={() => {
              addToCart(product.id);
            }}
          >
            Add To Cart
          </button>
          <button
            onClick={() => {
              removeFromCart(product.id);
            }}
          >
            Remove Item
          </button>
        </div>

        {/* <p className="productdisplay-right-category">
          <span>Category: </span>Women, T-Shirt, Crop Top
        </p>
        <p className="productdisplay-right-tags">
          <span>Tags: </span>Modern, Latest
        </p> */}
      </div>
    </div>
  );
};

export default ProductDisplay;
