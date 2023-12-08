import React from "react";
import "../1productVarities/ProductVarities.scss";
import FruitsVegetables from "./FruitsVegetables";
import SnacksStore from "./SnacksStore";
import Deal from "../3Deals/deal";
import Banner from "../2Banner/Banner";

const ProductVarities = () => {
  return (
    <section className="productVarities">
      <Banner />
      <Deal />
      <FruitsVegetables />
      <SnacksStore />
    </section>
  );
};

export default ProductVarities;
