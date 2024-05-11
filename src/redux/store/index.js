import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slice/authSlice";
import imgWallReducer from "../slice/imgWall";
import reportsSlice from "../slice/reportsSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    imgWall: imgWallReducer,
    reportsSlice: reportsSlice,
  },
});

export default store;
