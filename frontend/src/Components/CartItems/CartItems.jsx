import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
import PaystackPop from "@paystack/inline-js";
import { AuthContext } from "../../Pages/LoginSignup";

const CartItems = () => {
  const {
    getTotalCartAmount,
    all_product,
    cartItems,
    removeFromCart,
    isCartEmpty,
  } = useContext(ShopContext);
  const { user, loading } = useContext(AuthContext);
  console.log("User:", user);
  console.log("Loading:", loading);
  const navigate = useNavigate();
  if (loading) {
    // Check loading state
    return <div>Loading...</div>; // Render loading message
  }

  const payWithPaystack = (e) => {
    e.preventDefault();

    if (!user) {
      navigate("/login");
      return;
    }

    if (!isCartEmpty()) {
      const paystack = new PaystackPop();
      paystack.newTransaction({
        key: "pk_test_5756e4c082815036030b482a2794815c2837d607",
        amount: `${getTotalCartAmount()}00`,
        email: user.email,
      });
    } else {
      alert("Empty cart.");
    }
  };
  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {all_product.map((e, idx) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={idx}>
              <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt="" className="carticon-product-icon" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartitems-quantity">
                  {cartItems[e.id]}
                </button>
                <p className="cartitems-total-amount">
                  ₦{e.new_price * cartItems[e.id]}
                </p>
                <img
                  className="cartitems-remove-icon"
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>₦{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>₦3,000</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>₦{getTotalCartAmount()}</h3>
            </div>
          </div>
          {/* <div className="cartitems-promocode">
            <p>If you have a promo code, Enter it here</p>
            <div className="cartitems-promobox">
              <input type="text" placeholder="promo code" />
              <button>Submit</button>
            </div>
          </div> */}
          <button onClick={payWithPaystack}>PAY WITH PAYSTACK</button>
        </div>
      </div>
    </div>
  );
};
// ;
export default CartItems;
