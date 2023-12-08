import React from "react";
import json from "../../arrayofobjects.json";

const CleaningHousehold = () => {
  const objects = json.fruitsVegetables;

  return (
    <>
      <div className="title-sec">
        <h2>Cleaning and Household</h2>
      </div>
      <div className="content-sec">
        {objects.map((values, index, array) => (
          <div className="items" key={index}>
            <img src={values.imgURL} alt={values.name} />
          </div>
        ))}
      </div>
    </>
  );
};

export default CleaningHousehold;
