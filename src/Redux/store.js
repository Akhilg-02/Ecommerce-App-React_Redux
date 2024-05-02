import { configureStore } from "@reduxjs/toolkit";
import slideReducer from "../Redux/slices/sliderSlice";
import productsReducer from "../Redux/slices/productSlice";
import cartReducer from "../Redux/slices/cartSlice";
// import authReducer from "../Redux/slices/authSlice";

export const store = configureStore({
  reducer: {
    slider: slideReducer,
    products: productsReducer,
    cart: cartReducer,
    // user: authReducer,
  },
});