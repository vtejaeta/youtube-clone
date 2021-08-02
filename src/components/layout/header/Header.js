import React, { useCallback } from "react";
import { navigate } from "@reach/router";
import { useDispatch } from "react-redux";

import searchIcon from "../../../assets/search-icon.svg";
import backArrowBlack from "../../../assets/arrow_back_black.svg";

import { resetVideos } from "../../../features/getVideosByTermSlice";

import useUserStateFromRedux from "../../../hooks/useUserStateFromRedux";
import useTheme from "../../../hooks/useTheme";
import useClickListener from "../../../hooks/useClickListener";

import ThemeToggleSwitch from "../../shared/themeToggleSwitch/ThemeToggleSwitch";
import SignOutButton from "../../shared/signOutButton/SignOutButton";
import YoutubeLogo from "../../shared/youtubeLogo/YoutubeLogo";

import "./header.styles.scss";

export default function Header() {
  const headerRef = React.useRef(null);
  const inputRef = React.useRef(null);

  const { userName } = useUserStateFromRedux();

  const [theme, setTheme] = useTheme();

  const removeActiveSearch = useCallback((ref) => {
    ref.current.classList.remove("active-search");
  }, []);

  useClickListener(headerRef, removeActiveSearch);

  const dispatch = useDispatch();

  function toggleTheme() {
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  }

  function toggleClassName() {
    headerRef.current.classList.toggle("active-search");
    inputRef.current.focus();
  }

  function formHandler(e) {
    e.preventDefault();
    let searchTerm = inputRef.current;

    if (searchTerm.value.trim()) {
      dispatch(resetVideos());
      headerRef.current.classList.remove("active-search");
      navigate(`/results?search_term=${searchTerm.value.trim()}`);
      searchTerm.value = "";
    }
  }

  return (
    <header className={theme === "dark" ? "dark" : ""} ref={headerRef}>
      <YoutubeLogo />
      <button type="button" className="back-arrow" onClick={toggleClassName}>
        <img
          src={backArrowBlack}
          alt="back arrow"
          className="back-arrow-icon"
        />{" "}
      </button>
      <form className="search-box-form" onSubmit={formHandler}>
        <input
          type="search"
          aria-label="Search for videos"
          placeholder="Search"
          className="search-input"
          ref={inputRef}
        />
        <button type="submit" className="search-btn">
          <img
            src={searchIcon}
            alt="search button"
            className="search-btn-icon"
          />
        </button>
      </form>
      <button
        type="button"
        className="dummy search-btn"
        onClick={toggleClassName}
      >
        <img src={searchIcon} alt="search button" className="search-btn-icon" />
      </button>
      <div className="menu-items-cont">
        <p className="welcome-text">
          Hello <strong>{userName?.toUpperCase()}</strong>
        </p>
        <ThemeToggleSwitch theme={theme} toggleTheme={toggleTheme} />
        <SignOutButton dispatch={dispatch} />
      </div>
    </header>
  );
}
