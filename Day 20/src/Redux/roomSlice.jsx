import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  amount: {
    price: localStorage.getItem('Total price') || null,
  },
};

export const roomSlice = createSlice({
  name: "amount",
  initialState,
  reducers: {
    login1: (state, action) => {
      state.amount = { price: action.payload };
      localStorage.setItem('Total price', action.payload);
    },
    logout2: (state) => {
      state.user = { price: null };
      localStorage.removeItem('total price');
    },
  },
});