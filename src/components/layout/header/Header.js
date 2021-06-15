import React from "react";
import { navigate } from "@reach/router";
import searchIcon from "../../../assets/search-icon.svg";
import backArrowBlack from "../../../assets/arrow_back_black.svg";
import { useDispatch } from "react-redux";
import "./header.styles.scss";
import { setToggleTheme } from "../../../features/themeSlice";
import { resetVideos } from "../../../features/getVideosByTermSlice";
import useUserStateFromRedux from "../../../hooks/useUserStateFromRedux";
import useThemeStateFromRedux from "../../../hooks/useThemeStateFromRedux";
import ThemeToggleSwitch from "../../shared/themeToggleSwitch/ThemeToggleSwitch";
import SignOutButton from "../../shared/signOutButton/SignOutButton";
import YoutubeLogo from "../../shared/youtubeLogo/YoutubeLogo";

export default function Header() {
  const headerRef = React.useRef(null);
  const inputRef = React.useRef(null);
  const { userName } = useUserStateFromRedux();

  const { theme: UITheme } = useThemeStateFromRedux();

  const dispatch = useDispatch();

  function toggleTheme() {
    dispatch(setToggleTheme());
  }

  function toggleClassName() {
    headerRef.current.classList.toggle("active-search");
  }

  function formHandler(e) {
    e.preventDefault();
    let searchTerm = inputRef.current;
    if (searchTerm.value.trim()) {
      dispatch(resetVideos());
      navigate(`/results?search_term=${searchTerm.value.trim()}`);
      searchTerm.value = "";
    }
  }

  return (
    <header className={UITheme === "dark" ? "dark" : ""} ref={headerRef}>
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
          aria-label="search"
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
        <ThemeToggleSwitch theme={UITheme} toggleTheme={toggleTheme} />
        <SignOutButton dispatch={dispatch} />
      </div>
    </header>
  );
}
