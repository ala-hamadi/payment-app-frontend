import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    updateCart: (state, action) => {
      state.user = action.payload;
    },
  },
});
//signin & logout & updateCart =>actions
export const { login, logout, updateCart } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
