import React from "react";
import "./navbar.scss";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SearchIcon from "@mui/icons-material/Search";
import { GiShoppingCart } from "react-icons/gi";
import { IoHome } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cart } = useSelector((store) => store.cartItems);

  let length = cart.length;
  return (
    <>
      <section className="Nav-section">
        <div className="navbar">
          <img src="./image/bigbasket.png" alt="bigbasketLogo" />
          <hr />
          <div className="location">
            <span>
              <LocalShippingIcon className="vanlogo" />
              Get it in 1 Day
            </span>
            <span>600097, Thoraipakkam</span>
          </div>
          <div className="input-section">
            <SearchIcon className="searchIcon" />
            <input
              type="text"
              placeholder="Search Your Product ..."
              aria-label="Product Search box"
            />
          </div>
          <hr />
          <NavLink to="/">
            <IoHome />
            Home
          </NavLink>

          <hr />
          <NavLink to="/addtocart" className="cart-count">
            <GiShoppingCart className="cartIcon" />
            <h5>{length} Item</h5>
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default Navbar;
