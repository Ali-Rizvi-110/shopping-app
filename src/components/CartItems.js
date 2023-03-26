import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import "./Cart.css";
const CartItems = () => {
  const itemsList = useSelector((state)=> state.cart.itemsList)
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
          {/* <CartItem id={1} price={2500} name={"Macbook"} /> */}
          {
            itemsList.map(({name, totalPrice, id, quantity, price})=>{
              return <li key = {id} > <CartItem id = {id} name = {name} quantity = {quantity} price = {price} total = {totalPrice}  /> </li>
              // return <p key={id}>{name}  {totalPrice} {quantity} </p>
            })
          
          }
      </ul>
    </div>
  );
};

export default CartItems;
