import { createSlice } from "@reduxjs/toolkit";
import products from "../Components/ProductsData"

const initialState = { 
    cart: [],
    items: products,
    totalQuantity: 0,
    totalPrice: 0,


};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
         
        addToCart: (state, action) => {
            let find = state.cart.findIndex((item) => item.id === action.payload.id);
            if (find >= 0) {
              state.cart[find].qty += 1;
            } else {
              state.cart.push(action.payload);
            }
          },

          getCartTotal: (state) => {
            let { totalQuantity, totalPrice } = state.cart.reduce(
              (cartTotal, cartItem) => {
                console.log("carttotal", cartTotal);
                console.log("cartitem", cartItem);
                const { price, qty } = cartItem;
                console.log(price, qty);
                const itemTotal = price * qty;
                cartTotal.totalPrice += itemTotal;
                cartTotal.totalQuantity += qty;
                return cartTotal;
              },
              {
                totalPrice: 0,
                totalQuantity: 0,
              }
            );
            state.totalPrice = parseInt(totalPrice.toFixed(2));
            state.totalQuantity = totalQuantity;
          },
       
          increaseItemQuantity: (state, action) => {
            state.cart = state.cart.map((item) => {
              if (item.id === action.payload) {
                return { ...item, qty: item.qty + 1 };
              }
              return item;
            });
          },
          decreaseItemQuantity: (state, action) => {
            state.cart = state.cart.map((item) => {
              if (item.id === action.payload) {
                    return { ...item, qty: item.qty - 1 };      
                 
              }
              return item;
            });
          },

          removeItem: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
          },
       
    },
})

export const {addToCart, getCartTotal,  decreaseItemQuantity,  increaseItemQuantity, removeItem} = cartSlice.actions;
export default cartSlice.reducer