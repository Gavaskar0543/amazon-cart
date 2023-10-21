import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem: (state, action) => {
            // Add an item to the cart
            state.items.push(action.payload);
          },
          removeItem: (state, action) => {
            // Remove an item from the cart by its ID
            state.items = state.items.filter((item) => item.id !== action.payload);
          },
    }
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;