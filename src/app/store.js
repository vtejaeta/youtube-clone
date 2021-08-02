import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../features/userSlice";
import getVideosByTermReducer from "../features/getVideosByTermSlice";
import themeReducer from "../features/themeSlice";
import getSuggestionVideosReducer from "../features/getSuggestionVideosSlice";
import getVideoDetailsReducer from "../features/getVideoDetailsSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    getVideosByTerm: getVideosByTermReducer,
    getSuggestionVideos: getSuggestionVideosReducer,
    getVideoDetails: getVideoDetailsReducer,
    theme: themeReducer,
  },
});
