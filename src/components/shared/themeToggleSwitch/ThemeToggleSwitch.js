import React from "react";
import "./ThemeToggleSwitch.styles.scss";

export default function ThemeToggleSwitch({ theme, toggleTheme }) {
  return (
    <input
      type="checkbox"
      class="toggle"
      checked={theme === "light" ? false : true}
      onChange={toggleTheme}
    ></input>
  );
}
