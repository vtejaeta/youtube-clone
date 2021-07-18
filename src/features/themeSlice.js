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
    setToggleTheme: (state) => {
      state.theme = state.theme === "dark" ? "light" : "dark";
      saveToLocalStorage("_theme", state.theme);
    },
  },
});

export const { setToggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
