import { createSlice } from "@reduxjs/toolkit";
import youtube from "../apis/youtube";

const initialState = {
  loading: false,
  suggestionVideos: null,
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
      state.loading = false;
      state.suggestionVideos = action.payload;
    },
    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    resetSuggestionVideos: (state) => {
      state.suggestionVideos = null;
    },
  },
});

export const searchSuggestedVideos = (videoId) => async (dispatch) => {
  dispatch(resetSuggestionVideos());
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
  }
};

export const {
  setLoading,
  setSuggestionVideos,
  setError,
  resetSuggestionVideos,
} = getSuggestionVideosSlice.actions;
export default getSuggestionVideosSlice.reducer;
