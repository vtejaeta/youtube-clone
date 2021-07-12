import React from "react";
import { Link } from "@reach/router";

import useThemeStateFromRedux from "../../hooks/useThemeStateFromRedux";

import pageNotFound from "../../assets/Page not Found.svg";
import "./pageNotFoundScreen.styles.scss";

export default function PageNotFoundScreen() {
  const { theme } = useThemeStateFromRedux();

  return (
    <main
      className={
        theme === "dark" ? "pageNotFound-cont dark" : "pageNotFound-cont"
      }
    >
      <img
        src={pageNotFound}
        className="pageNotFound-illustartor"
        alt="Page not found illustrator"
      />
      <p className="error-desc">OOPS!</p>
      <p className="page-description">
        Page you are looking for is not available.
      </p>
      <Link to="/">
        {" "}
        <button className="home-link">Go Home</button>
      </Link>
    </main>
  );
}
