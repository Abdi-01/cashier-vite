import { UPDATE_CART } from "./type";

const INITIAL_STATE = [];

export const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_CART:
            return action.payload;
        default:
            return state;
    }
}