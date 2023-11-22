import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "./CSS/cart.css";
import { remove } from "./Redux/CartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart);
  // console.log(cartItems);
  const removeItem = (id) => {
    dispatch(remove(id));
  };
  return (
    <>
      <h2 className="text-2xl text-center text-blue-500">Cart Page</h2>
      <div className="cartContainer">
        {cartItems.map((item) => (
          <div className="cartBox">
            {
              // console.log(item)
            }
            <div className="rating">
              <i class="fa-solid fa-star"></i>
              <span>{item.rating}</span>
              <span>/5</span>
            </div>
            {/*------------ For store Api ----------------*/}
            <img src={item.image} alt="img" className="cartImg" />
            {/* <h6>{item._id}</h6> */}
            <h2>{item.title.slice(0, 20)}</h2>
            <h3>Price : {item.price}</h3>
            <button onClick={() => removeItem(item._id)}>Remove</button>
          </div>
        ))}
      </div>

      {/* <div className="cartContainer">
        <div className="cartBox">
          <img src={img1} alt="img" className="cartImg" />
          <h2>BeatXp</h2>
          <h3>Price : $18</h3>
          <button>Remove</button>
        </div>      
      </div> */}
    </>
  );
};

export default Cart;
