import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/0navbar/navbar";
import ProductVarities from "../components/1productVarities/ProductVarities";
import ProducrShowItems from "../components/4productShowItems/ProductShowItems";
import Addtocart from "../components/5addtocart/Addtocart";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductVarities />} />
        <Route path="items/:name" element={<ProducrShowItems />} />
        <Route path="/addtocart/:objectname" element={<Addtocart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
