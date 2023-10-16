import { configureStore } from "@reduxjs/toolkit";
import accountSliceReducer from "./slice/accountSlice";
export const globalState = configureStore({
  reducer: {
    accountSliceReducer,
  },
});
