import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";
import youtubeLight from "../../../assets/youtube-light.png";
import searchIcon from "../../../assets/search-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import "./header.styles.scss";
import { setToggleTheme } from "../../../features/themeSlice";

export default function Header({ userPhoto, userEmail, userName }) {
  const [theme, setTheme] = useState("light");
  const dispatch = useDispatch();
  const { theme: UITheme } = useSelector((state) => state.theme);

  function toggleTheme() {
    setTheme((previousState) => {
      if (previousState === "light") {
        return "dark";
      } else {
        return "light";
      }
    });
  }
  useEffect(() => {
    dispatch(setToggleTheme(theme));
  }, [theme, dispatch]);

  return (
    <header class={UITheme === "dark" ? "dark" : ""}>
      <Link to="/home">
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
          <img
            src={searchIcon}
            alt="search button"
            className="search-btn-icon"
          />
        </button>
      </form>
      <p className="welcome-text">
        Hello <strong>{userName.toUpperCase()}</strong>
      </p>
      <label class="switch">
        <input
          type="checkbox"
          className="theme-input"
          onClick={() => toggleTheme()}
        />
        <span class="slider round"></span>
      </label>
      <div className="menu-items">
        <img src={userPhoto} alt="User info" />
      </div>
    </header>
  );
}
