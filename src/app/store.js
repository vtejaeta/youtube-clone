import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import getVideosByTermReducer from "../features/getVideosByTermSlice";
import themeReducer from "../features/themeSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    getVideosByTerm: getVideosByTermReducer,
    theme: themeReducer,
  },
});
