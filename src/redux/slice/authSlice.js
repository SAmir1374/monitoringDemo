import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  accessToken: Cookies.get("accessToken") || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
      Cookies.set("accessToken", action.payload, { expires: 1 / 48 });
    },
    updateAccessToken: (state , action) => {
      state.accessToken = { ...state.user, ...action.payload };
      const accessTokenStringify = JSON.stringify(action.payload);
      Cookies.set("accessToken", accessTokenStringify);
    },
    logout: (state, action) => {
      state.accessToken = null;
      Cookies.remove("accessToken");
    },
  },
});

export const { updateAccessToken, setAccessToken, logout } = authSlice.actions;

export default authSlice.reducer;
