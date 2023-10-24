import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[],
        totalValue:0,
    },
    reducers:{
        addItem: (state, action) => {
            // Add an item to the cart
            let product = {
              prod:action.payload,
              quantity:1
            }
            state.items.push( product);
          
          },
          removeItem: (state, action) => {
            // Remove an item from the cart by its ID
          
            state.items = state.items.filter((item) => item.prod.id !== action.payload);
          },
          increaseQuantity: (state, action) => {
            state.items = state.items.map((item) => {
                if (item.prod.id === action.payload) {
                    item.quantity++;
                }
                return item; // Make sure to return the item in the map function
            });
        },
        decreaseQuantity: (state, action) => {
            state.items = state.items.map((item) => {
                if (item.prod.id === action.payload && item.quantity > 1) {
                    item.quantity--;
                }
                return item;
            });
        },
        calculateTotalCartValue: (state) => {
          state.totalValue = state.items.reduce((total, item) => {
              return total + ( Math.round(item.prod.price)* item.quantity);
          }, 0);
      }
  }
         
           
    
});

export const { addItem, removeItem,increaseQuantity,decreaseQuantity,calculateTotalCartValue } = cartSlice.actions;
export default cartSlice.reducer;