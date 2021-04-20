import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import getVideosByTermReducer from "../features/getVideosByTermSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    getVideosByTerm: getVideosByTermReducer,
  },
});
