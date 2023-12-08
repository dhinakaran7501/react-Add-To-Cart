import React from "react";
import "./deal.scss";
import json from "../../arrayofobjects.json";

const Deal = () => {
  let objects = json.deals;
  return (
    <div className="Deal">
      {objects.map((values, index) => (
        <div className="deal-img" key={index}>
          <img src={values.imgURL} alt="Deal" />
        </div>
      ))}
    </div>
  );
};

export default Deal;
