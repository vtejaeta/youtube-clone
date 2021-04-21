import { createSlice } from "@reduxjs/toolkit";
import youtube from "d:/videos_hooks/src/apis/youtube";

const initialState = {
  videosByTerm: [],
};

const getVideosByTermSlice = createSlice({
  name: "getVideosByTerm",
  initialState,
  reducers: {
    setVideosByTerm: (state, action) => {
      state.videosByTerm = action.payload;
    },
  },
});

export const searchVideosByTerm = (searchTerm) => async (dispatch) => {
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
};

export async function getVideoViewsCount(videoId) {
  const { data } = await youtube.get("/videos", {
    params: {
      part: "statistics",
      id: videoId,
      key: process.env.REACT_APP_YOUTUBE_APIKEY,
    },
  });
  return data;
}

export const { setVideosByTerm } = getVideosByTermSlice.actions;
export default getVideosByTermSlice.reducer;
