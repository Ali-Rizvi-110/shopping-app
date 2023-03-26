import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import Cart from "./Cart";
import "./Header.css";
const Header = () => {
  const dispatch = useDispatch();

  function toggleCart(){
    dispatch(cartActions.setShowCart());
  }

  return (
    <header className="header">
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <h2
              className="header-h2"
              style={{ fontFamily: "monospace", fontSize: "30px" }}
            >
              Redux Shopping App
            </h2>
          </li>
          {/* <li> */}
            <Cart onClick = {toggleCart} />
          {/* </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
