import React from "react";
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from "../utils/localStorage.utils";

export default function useTheme() {
  const preferDarkColorScheme = "(prefers-color-scheme: dark)";

  // Lazy state initialiser -> runs fn only once -> when app is initially mounted
  const [theme, setTheme] = React.useState(
    () =>
      getFromLocalStorage("_youtubeColorTheme") ||
      (window.matchMedia(preferDarkColorScheme).matches ? "dark" : "light")
  );

  React.useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkColorScheme);
    const handleChange = () => setTheme(mediaQuery.matches ? "dark" : "light");

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    saveToLocalStorage("_youtubeColorTheme", theme);
  }, [theme]);

  return [theme, setTheme];
}
