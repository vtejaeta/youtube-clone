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
        onKeyUp={(event) => event.key === "Enter" && toggleTheme()}
        onSubmit={toggleTheme}
        onChange={toggleTheme}
        aria-label="Toggle theme"
      ></input>
    </>
  );
}
