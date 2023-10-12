import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], 
  total: 0, 
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = {
        id: action.payload.id,
        name: action.payload.name,
        price: action.payload.price,
      };
      state.items.push(newItem);
      state.total += newItem.price;
    },
    removeItem: (state, action) => {
      const removedItem = state.items.find((item) => item.id === action.payload);
      if (removedItem) {
        state.items = state.items.filter((item) => item.id !== action.payload);
        state.total -= removedItem.price;
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export const selectCart = (state) => state.cart;

export default cartSlice.reducer;
