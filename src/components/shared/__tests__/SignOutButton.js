import React from "react";
import { fireEvent } from "@testing-library/react";
import { screen } from "@testing-library/react";
import SignOutButton from "../signOutButton/SignOutButton";
import { renderWithRedux } from "../../../testUtils/utility";

test("should ", () => {
  renderWithRedux(<SignOutButton dispatch={() => {}} />);

  const profileImgNode = screen.getByRole("img", { name: /user pic/i });

  expect(profileImgNode).toBeInTheDocument();

  fireEvent.click(profileImgNode);
});
