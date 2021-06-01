import React from "react";
import pageNotFound from "../../assets/Page not Found.svg";
import "./pageNotFoundScreen.styles.scss";
import { Link } from "@reach/router";

export default function PageNotFoundScreen() {
  return (
    <div className="pageNotFound-cont">
      <img
        src={pageNotFound}
        className="pageNotFound-illustartor"
        alt="Page not found illustrator"
      />
      <Link to="/">
        {" "}
        <button className="home-link">Go Home</button>
      </Link>
    </div>
  );
}
