import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import getVideosByTermReducer from "../features/getVideosByTermSlice";
import themeReducer from "../features/themeSlice";
import getSuggestionVideosReducer from "../features/getSuggestionVideosSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    getVideosByTerm: getVideosByTermReducer,
    getSuggestionVideos: getSuggestionVideosReducer,
    theme: themeReducer,
  },
});
