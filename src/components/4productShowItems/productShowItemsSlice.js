import { createSlice } from "@reduxjs/toolkit";

const ProducrShowItemsSlice = createSlice({
  name: "cartItems",
  initialState: {
    cart: [],
  },
  reducers: {
    addtocart: (state, action) => {
      state.cart.push(action.payload);
    },
  },
});
export const { addtocart } = ProducrShowItemsSlice.actions;
export default ProducrShowItemsSlice.reducer;
