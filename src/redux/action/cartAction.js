import { UPDATE_CART } from "../reducer/type"

export const cartAction = (data) => {
    return {
        type: UPDATE_CART,
        payload: data
    }
}