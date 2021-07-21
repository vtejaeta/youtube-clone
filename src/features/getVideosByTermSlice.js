import { createSlice } from "@reduxjs/toolkit";
import youtube from "../apis/youtube";

const initialState = {
  loading: false,
  videosByTerm: null,
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
      state.loading = false;
      state.videosByTerm = action.payload;
    },
    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    resetVideos: (state) => {
      state.videosByTerm = null;
    },
  },
});

export const searchVideosByTerm = (searchTerm) => async (dispatch) => {
  dispatch(resetVideos());
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
  }
};

export const { setLoading, setVideosByTerm, setError, resetVideos } =
  getVideosByTermSlice.actions;

export default getVideosByTermSlice.reducer;
