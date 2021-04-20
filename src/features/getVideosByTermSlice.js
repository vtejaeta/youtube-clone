import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  videosByTerm: [],
};

const getVideosByTermSlice = createSlice({
  name: "getVideosByTerm",
  initialState,
  reducers: {
    setVideosByTerm: (state, action) => {
      state.videosByTerm = [...action.payload];
    },
  },
});

export const searchVideosByTerm = () => async (dispatch) => {
  dispatch(setVideosByTerm());
};

export const { setVideosByTerm } = getVideosByTermSlice.actions;
export default getVideosByTermSlice.reducer;
