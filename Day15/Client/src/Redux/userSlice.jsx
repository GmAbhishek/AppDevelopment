import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: localStorage.getItem('email') || null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.email = action.payload;
      localStorage.setItem('email', action.payload);
    },
    logout: (state) => {
      state.email = null;
      localStorage.removeItem('email');
    },
  },
});

export const { login, logout } = userSlice.actions;
export const selectUser = (state) => state.user;
export default userSlice.reducer;
