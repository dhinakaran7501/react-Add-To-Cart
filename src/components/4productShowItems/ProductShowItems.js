import React from "react";
import "./ProductShowItems.scss";
import json from "../../arrayofobjects.json";
import { NavLink, useParams } from "react-router-dom";
import { BiCheckboxSquare } from "react-icons/bi";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { FaRegBookmark } from "react-icons/fa6";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { useDispatch, useSelector } from "react-redux";
import { addtocart } from "./productShowItemsSlice";

const ProductShowItems = () => {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cartItems);

  const objects = json.bigbasket;
  let { name } = useParams();

  const filterobj = objects.filter(function (values) {
    return values.name === name ? values : false;
  });

  let finalNestedObjs = filterobj[0].nestedObjs;
  console.log(cart);
  return (
    <section className="ProductShowItems">
      <div className="product-sec">
        {finalNestedObjs.map((values, index, array) => (
          <div className="card" key={index}>
            <div className="card-img">
              <img src={values.imgURL} alt={values.productName} />
              <h5>{values.offer == null ? 0 : values.offer}% OFF</h5>
              <BiCheckboxSquare className="veg-symbol" />
            </div>
            <div className="productName">
              <p>{values.brandName}</p>
              <h5>{values.productName}</h5>
            </div>
            <div className="option">
              <select disabled>
                <option value="1">
                  {values.count} {values.type}
                </option>
              </select>
            </div>
            <div className="rate">
              <h4>
                <FaIndianRupeeSign /> {values.price}
              </h4>
              <span>
                <LiaRupeeSignSolid />
                {values.alterPrice}
              </span>
            </div>
            <div className="footer">
              <Tooltip title="Save For Later" arrow>
                <Button className="tooltip">
                  <FaRegBookmark />
                </Button>
              </Tooltip>

              <NavLink
                to={`/addtocart/${filterobj[0].name}`}
                className="addbtn"
                onClick={() => dispatch(addtocart(values))}
              >
                <button className="add">Add to Cart</button>
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductShowItems;
