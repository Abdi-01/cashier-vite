import { createSlice } from "@reduxjs/toolkit";

const accountSlice = createSlice({
  name: "account",
  initialState: {
    username: "",
    password: "",
    role: "admin",
  },
  reducers: {
    login: (state, action) => {
      console.log("Slice", action.payload);
      state.username = action.payload.username;
      state.password = action.payload.password;
      state.role = action.payload.role;
    },
    logout: (state, action) => {
      state = {
        username: "",
        password: "",
        role: "admin",
      };
    },
  },
});

export const { login, logout } = accountSlice.actions;
export default accountSlice.reducer;
