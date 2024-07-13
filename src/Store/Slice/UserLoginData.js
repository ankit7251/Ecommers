import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginData: JSON.parse(localStorage.getItem("loginData")) || [],
};

const userLoginData = createSlice({
  name: "loginData",
  initialState,
  reducers: {
    AddUser: (state, action) => {
      state.loginData = action.payload;
      localStorage.setItem("loginData", JSON.stringify(state.loginData));
    },
  },
});

export const { AddUser } = userLoginData.actions;
export default userLoginData.reducer;
