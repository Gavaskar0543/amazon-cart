import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "./Reducer/apiSlice";

const store = configureStore({
   reducer:{
    api :apiReducer
   }
});

export default store;

