import { configureStore } from "@reduxjs/toolkit";
import productShowItemsSlice from "./components/4productShowItems/productShowItemsSlice";
import addtocartSlice from "./components/5addtocart/addtocartSlice";

const store = configureStore({
  reducer: {
    cartItems: productShowItemsSlice,
    addtocart: addtocartSlice,
  },
});

export default store;
