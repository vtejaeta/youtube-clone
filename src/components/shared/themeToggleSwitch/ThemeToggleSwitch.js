import React from "react";

import "./ThemeToggleSwitch.styles.scss";

export default function ThemeToggleSwitch({ theme, toggleTheme }) {
  return (
    <>
      <input
        type="checkbox"
        className="toggle"
        checked={theme === "light" ? false : true}
        aria-checked={theme === "light" ? false : true}
        onChange={toggleTheme}
        onKeyPress={toggleTheme}
        aria-label="Toggle theme"
      ></input>
    </>
  );
}
