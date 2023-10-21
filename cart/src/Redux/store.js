import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "./Reducer/apiSlice";
import cartReducer from "./Reducer/cartSlice";
import authReducer from './Reducer/authSlice';

const store = configureStore({
   reducer:{
   auth:authReducer,
    api :apiReducer,
    cart :cartReducer
   }
});

export default store;

