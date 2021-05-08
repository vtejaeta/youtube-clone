import React, { useEffect, useState } from "react";
import { Link, navigate } from "@reach/router";
import youtubeLight from "../../../assets/youtube-light.png";
import searchIcon from "../../../assets/search-icon.svg";
import { useDispatch } from "react-redux";
import "./header.styles.scss";
import { setToggleTheme } from "../../../features/themeSlice";
import { getFromLocalStorage } from "../../../utils/localStorage.utils";
import { resetVideos } from "../../../features/getVideosByTermSlice";
import { logUserOut } from "../../../features/userSlice";
import useUserStateFromRedux from "../../../hooks/useUserStateFromRedux";
import useThemeStateFromRedux from "../../../hooks/useThemeStateFromRedux";

export default function Header() {
  const [theme, setTheme] = useState(
    () => getFromLocalStorage("_theme") || "light"
  );
  const [searchTerm, setSearchTerm] = useState("");
  const { userPhoto, userName } = useUserStateFromRedux();

  const { theme: UITheme } = useThemeStateFromRedux();

  const dispatch = useDispatch();

  function toggleTheme() {
    setTheme((previousState) => {
      if (previousState === "light") {
        return "dark";
      }
      return "light";
    });
  }

  function inputHandler(e) {
    setSearchTerm(e.target.value);
  }

  function formHandler(e) {
    e.preventDefault();
    if (searchTerm.trim()) {
      dispatch(resetVideos());
      navigate(`/results?search_term=${searchTerm.trim()}`);
      setSearchTerm("");
    }
  }

  useEffect(() => {
    if (theme !== UITheme) {
      dispatch(setToggleTheme(theme));
    }
  }, [theme, dispatch, UITheme]);

  return (
    <header className={UITheme === "dark" ? "dark" : ""}>
      <Link to="/home">
        <div className="main-logo-cont">
          <img src={youtubeLight} alt="youtube-logo" className="header-logo" />
        </div>
      </Link>
      <form className="search-box-form" onSubmit={formHandler}>
        <input
          type="search"
          aria-label="search"
          placeholder="Search"
          className="search-input"
          value={searchTerm}
          onChange={inputHandler}
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
      <label className="switch">
        <input
          type="checkbox"
          className="theme-input"
          checked={theme === "light" ? false : true}
          // onClick={() => toggleTheme()}
          onChange={() => toggleTheme()}
        />
        <span className="slider round"></span>
      </label>
      <div className="menu-items dropdown">
        <img src={userPhoto} alt="User info" />
        <div className="dropdown-content">
          <p
            className="sign-out-btn"
            onClick={(e) => {
              dispatch(logUserOut());
              navigate("/");
            }}
          >
            Sign out
          </p>
        </div>
      </div>
    </header>
  );
}
