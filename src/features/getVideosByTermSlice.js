import { createSlice } from "@reduxjs/toolkit";
import youtube from "d:/videos_hooks/src/apis/youtube";

const initialState = {
  loading: false,
  videosByTerm: [],
  error: null,
};

const getVideosByTermSlice = createSlice({
  name: "getVideosByTerm",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setVideosByTerm: (state, action) => {
      state.videosByTerm = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    resetVideos: (state) => {
      state.videosByTerm = [];
    },
  },
});

export const searchVideosByTerm = (searchTerm) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const { data } = await youtube.get("/search", {
      params: {
        q: searchTerm,
        type: "video",
        part: "snippet",
        maxResults: 10,
        key: process.env.REACT_APP_YOUTUBE_APIKEY,
      },
    });
    dispatch(setVideosByTerm(data.items));
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoading(false));
  }
};

export const {
  setLoading,
  setVideosByTerm,
  setError,
  resetVideos,
} = getVideosByTermSlice.actions;

export default getVideosByTermSlice.reducer;
