import { LOGIN_SUCCESS } from "../reducer/type"

export const loginAction = (data) => {
    return {
        type: LOGIN_SUCCESS,
        payload: data
    }
}