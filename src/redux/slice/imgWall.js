import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  imgWall: [],
};

const imgWall = createSlice({
  name: "imgWall",
  initialState,
  reducers: {
    setImgWall: (state, action) => {
      state.imgWall = action.payload;
    },
  },
});

export const { setImgWall } = imgWall.actions;

export default imgWall.reducer;
