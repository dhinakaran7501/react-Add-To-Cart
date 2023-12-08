import React from "react";
import "./Addtocart.scss";
import { useDispatch, useSelector } from "react-redux";
import { FaRupeeSign } from "react-icons/fa";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { FiPlus } from "react-icons/fi";
import { LuMinus } from "react-icons/lu";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { decrement, increment } from "./addtocartSlice";
import { Link, useParams } from "react-router-dom";
import json from "../../arrayofobjects.json";

const Addtocart = () => {
  const { cart } = useSelector((store) => store.cartItems);
  const { quantity } = useSelector((store) => store.addtocart);

  let length = cart.length;

  const dispatch = useDispatch();

  let increment = (id, obj) => {
    {
      obj.filter((values) => (id === values.id ? quantity + 1 : "0"));
    }
  };
  return (
    <div className="Addtocart">
      <h3>Your Basket</h3>
      <div className="checkout-section">
        <div className="content-section">
          <div className="subtotal">
            <h4>Subtotal</h4>
            <span>({length} item) :</span>
            <h4>
              <FaRupeeSign /> 42.00
            </h4>
          </div>
          <div className="saving-sec">
            <h5>Savings:</h5>
            <h5>
              <FaRupeeSign /> 39.00
            </h5>
          </div>
        </div>
        <div className="button">
          <button>Checkout</button>
        </div>
      </div>

      <div className="title-sec">
        <h4>Items (1 item)</h4>
        <div className="quantity-subtotal">
          <h4>Quantity</h4>
          <h4>Sub-total</h4>
        </div>
      </div>

      <div className="parentObjectName">
        <p>Cart Item Details</p>
        <p></p>
      </div>

      <div className="cart-products">
        {cart.length > 0 ? (
          cart.map((values, index, array) => (
            <div className="newproducts" key={index}>
              <div className="image-section">
                <img src={values.imgURL} alt={values.productName} />

                <div className="title-section">
                  <p>{values.productName}</p>
                  <div className="price-sec">
                    <span className="price">
                      <FaRupeeSign /> {values.price}
                    </span>
                    <span className="alterprice">
                      <LiaRupeeSignSolid /> {values.alterPrice}
                    </span>
                  </div>
                </div>
              </div>
              <div className="quantity-subtotal">
                <div className="incre-decre-section">
                  <div className="buttons">
                    <LuMinus onClick={() => dispatch(decrement())} />
                    <span>{quantity}</span>
                    <FiPlus onClick={() => increment(values.id, cart)} />
                  </div>
                  <p>Delete</p>
                </div>
                <div className="rate-section">
                  <p className="rate">
                    <FaRupeeSign />
                    {`${values.price}`}
                  </p>
                  <p>
                    Saved: <LiaRupeeSignSolid />
                    {Math.round(values.alterPrice - values.price)}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <Link to="/" className="emptycart">
            <FaLongArrowAltLeft /> Your cart is Empty
          </Link>
        )}
      </div>
    </div>
  );
};

export default Addtocart;
