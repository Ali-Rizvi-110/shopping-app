import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cartSlice, { cartActions } from "../store/cart-slice";

import "./Product.css";
const Product = ({ name, id, imgURL, price }) => {
  
  const dispatch = useDispatch()
  function addToCart(){
    dispatch(cartActions.addToCart({
      name,
      id, 
      price,
    }))
  }
  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={addToCart} >Add to cart</button>
    </div>
  );
};

export default Product;
