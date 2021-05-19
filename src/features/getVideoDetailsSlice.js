import { createSlice } from "@reduxjs/toolkit";
import youtube from "d:/videos_hooks/src/apis/youtube";

const initialState = {
  loading: false,
  videoDetails: [],
  error: null,
};

const getVideoDetailsSlice = createSlice({
  name: "getVideoDetails",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setVideoDetails: (state, action) => {
      state.videoDetails = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    resetVideos: (state) => {
      state.videoDetails = [];
    },
  },
});

export const getVideoDetails = (videoId) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const { data } = await youtube.get("videos", {
      params: {
        part: "statistics",
        id: `${videoId}`,
        key: process.env.REACT_APP_YOUTUBE_APIKEY,
      },
    });
    dispatch(setVideoDetails(data.items));
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoading(false));
  }
};

export const {
  setLoading,
  setVideoDetails,
  setError,
  resetVideos,
} = getVideoDetailsSlice.actions;
export default getVideoDetailsSlice.reducer;
