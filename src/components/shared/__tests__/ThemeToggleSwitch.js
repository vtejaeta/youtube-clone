import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { screen } from "@testing-library/react";

import ThemeToggleSwitch from "../themeToggleSwitch/ThemeToggleSwitch";

test("should toggle theme switch for mouse click", () => {
  const toggleTheme = jest.fn();
  render(<ThemeToggleSwitch theme="light" toggleTheme={toggleTheme} />);

  const themeSwitchNode = screen.getByRole("checkbox", {
    name: /toggle theme/i,
  });

  fireEvent.click(themeSwitchNode);

  expect(screen.getByRole("checkbox", { checked: true })).toBeInTheDocument();

  fireEvent.click(themeSwitchNode);

  expect(toggleTheme).toHaveBeenCalledTimes(2);
  expect(screen.getByRole("checkbox", { checked: false })).toBeInTheDocument();
});
