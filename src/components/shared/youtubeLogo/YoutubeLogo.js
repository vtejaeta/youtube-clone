import { Link } from "@reach/router";
import React from "react";
import youtubeLight from "../../../assets/youtube-light.png";

export default function YoutubeLogo() {
  return (
    <Link to="/home" className="main-logo-link-cont">
      <div className="main-logo-cont">
        <img src={youtubeLight} alt="youtube-logo" className="header-logo" />
      </div>
    </Link>
  );
}
