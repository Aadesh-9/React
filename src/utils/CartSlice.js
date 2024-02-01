import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // add items is reducer function(actions) which gets access to state and it also get acces to action
    // it will modify state based on the action
    addItem: (state, action) => {
      // we are modifying state here
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = CartSlice.actions; // exporting actions

export default CartSlice.reducer;
