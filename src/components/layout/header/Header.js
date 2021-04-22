import React from "react";
import "./header.styles.scss";
import youtubeLight from "../../../assets/youtube-light.png";
import { Link } from "@reach/router";
import searchIcon from "../../../assets/search-icon.svg";

export default function Header({
  userPhoto = "https://lh3.googleusercontent.com/a-/AOh14GggPjGUeJn0Qncu3PsbY2nvHNOg0-70yC4_BWOR7w=s96-c",
  userEmail,
  userName = "Viswateja eatha",
}) {
  return (
    <header>
      <Link to="/">
        <div className="main-logo-cont">
          <img src={youtubeLight} alt="youtube-logo" className="header-logo" />
        </div>
      </Link>
      <form className="search-box-form">
        <input
          type="search"
          aria-label="search"
          placeholder="Search"
          className="search-input"
        />
        <button type="submit" className="search-btn">
          <img src={searchIcon} alt="search button" />
        </button>
      </form>
      <p className="welcome-text">
        Hello <strong>{"viswateja eatha".toUpperCase()}</strong>
      </p>
      <label class="switch">
        <input type="checkbox" className="theme-input" />
        <span class="slider round"></span>
      </label>
      <div className="menu-items">
        <img
          src={
            "https://lh3.googleusercontent.com/a-/AOh14GggPjGUeJn0Qncu3PsbY2nvHNOg0-70yC4_BWOR7w=s96-c"
          }
          alt="User info"
        />
      </div>
    </header>
  );
}
