import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setToggleTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { setToggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
