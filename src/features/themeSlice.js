import { createSlice } from "@reduxjs/toolkit";
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from "../utils/localStorage.utils";

const initialState = {
  theme: getFromLocalStorage("_theme") || "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setToggleTheme: (state, action) => {
      state.theme = action.payload;
      saveToLocalStorage("_theme", action.payload);
    },
  },
});

export const { setToggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
