import React from "react";
import json from "../../arrayofobjects.json";
import { NavLink, Outlet } from "react-router-dom";

const FruitsVegetables = () => {
  const objects = json.bigbasket;
  return (
    <>
      <div className="title-sec">
        <h2>Fruits and Vegetables</h2>
      </div>
      <div className="content-sec">
        {objects.map((values, index, array) => (
          <NavLink to={`items/${values.name}`} className="items" key={index}>
            <img src={values.imgURL} alt={values.name} />
          </NavLink>
        ))}
      </div>

      <Outlet />
    </>
  );
};

export default FruitsVegetables;
