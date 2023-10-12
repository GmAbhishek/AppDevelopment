import { configureStore } from "@reduxjs/toolkit";
import userSlice from './userSlice'
import cartSlice from './cartSlice';
export default configureStore({
    reducer :{
        user:userSlice,
        cart: cartSlice,
    }
})