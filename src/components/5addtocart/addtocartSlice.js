import { createSlice } from "@reduxjs/toolkit";

const addtocartSlice = createSlice({
  name: "addtocart",
  initialState: {
    quantity: 1,
    price: 0,
    savedPrice: 0,
  },
  reducers: {
    // increment: {
    //   prepare(id, obj) {
    //     return {
    //       payload: { id, obj },
    //     };
    //   },
    //   reducer(state, action) {
    //     let currid = action.payload.id;
    //     let currobj = action.payload.obj;

    //     let item = currobj.find((values) =>
    //       currid === values.id ? (state.quantity += 1) : 0
    //     );
    //   },
    // },

    increment: (state, action) => {
      state.quantity = action.payload;
    },

    decrement: (state, action) => {
      if (state.quantity > 1) state.quantity = state.quantity - 1;
    },
  },
});

export const { increment, decrement } = addtocartSlice.actions;
export default addtocartSlice.reducer;
