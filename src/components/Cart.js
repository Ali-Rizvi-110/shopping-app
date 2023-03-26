import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/auth-slice";
import { cartActions } from "../store/cart-slice";
import "./Cart.css";
const Cart = () => {
  const quantity = useSelector((state)=>state.cart.totalQuantity)
  const dispatch = useDispatch();

  function toggleCart(){
    dispatch(cartActions.setShowCart())
  }
  const logout = () => {
    dispatch(authActions.logout())
  }
  return (
    <div className="cartIcon">
      <button onClick={toggleCart} ><h3>Show Cart: {quantity} Items</h3></button>
      {/* <h3>Cart: {quantity} Items</h3> */}
      <button onClick={logout} ><h3>LOGOUT</h3></button>
    </div>
  );
};

export default Cart;
