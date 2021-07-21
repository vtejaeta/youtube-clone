import { createSlice } from "@reduxjs/toolkit";
import youtube from "../apis/youtube";

const initialState = {
  loading: false,
  videoDetails: null,
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
      state.loading = false;
      state.videoDetails = action.payload;
    },
    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    resetVideoDetails: (state) => {
      state.videoDetails = null;
    },
  },
});

export const getVideoDetails = (videoId) => async (dispatch) => {
  dispatch(resetVideoDetails());
  dispatch(setLoading(true));
  try {
    const { data } = await youtube.get("videos", {
      params: {
        part: "snippet,contentDetails,statistics",
        id: `${videoId}`,
        key: process.env.REACT_APP_YOUTUBE_APIKEY,
      },
    });
    data.items.length > 0
      ? dispatch(setVideoDetails(data.items[0]))
      : dispatch(setError(Error("Got a bad request")));
  } catch (error) {
    dispatch(setError(error));
  }
};

export const { setLoading, setVideoDetails, setError, resetVideoDetails } =
  getVideoDetailsSlice.actions;
export default getVideoDetailsSlice.reducer;
