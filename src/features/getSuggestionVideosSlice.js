import { createSlice } from "@reduxjs/toolkit";
import youtube from "d:/videos_hooks/src/apis/youtube";

const initialState = {
  loading: false,
  suggestionVideos: [],
  error: null,
};

const getSuggestionVideosSlice = createSlice({
  name: "getSuggestionVideos",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setSuggestionVideos: (state, action) => {
      state.suggestionVideos = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    resetVideos: (state) => {
      state.suggestionVideos = [];
    },
  },
});

export const searchSuggestedVideos = (videoId) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const { data } = await youtube.get("search", {
      params: {
        part: "snippet",
        relatedToVideoId: videoId,
        maxResults: 10,
        type: "video",
        key: process.env.REACT_APP_YOUTUBE_APIKEY,
      },
    });
    dispatch(setSuggestionVideos(data.items));
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setLoading(false));
  }
};

export const {
  setLoading,
  setSuggestionVideos,
  setError,
  resetVideos,
} = getSuggestionVideosSlice.actions;
export default getSuggestionVideosSlice.reducer;
