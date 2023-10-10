import { configureStore } from "@reduxjs/toolkit";
import { accountReducer } from "./accountReducer";
const globalState = configureStore({
    reducer: {
        accountReducer
    }
});

export default globalState;