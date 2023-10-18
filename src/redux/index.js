import { configureStore } from "@reduxjs/toolkit";
import accountSliceReducer from "./slice/accountSlice";
import cartSliceReducer from "./slice/cartSlice";
import productSliceReducer from "./slice/productSlice";
export const globalState = configureStore({
  reducer: {
    accountSliceReducer,
    cartSliceReducer,
    productSliceReducer,
  },
});
