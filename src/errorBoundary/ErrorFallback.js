import { Link } from "@reach/router";
import React from "react";
import Header from "../components/layout/header/Header";
import useThemeStateFromRedux from "../hooks/useThemeStateFromRedux";
import "./ErrorFallback.styles.scss";
import FeelingSorryPana from "../assets/Feeling sorry-pana.svg";

export default function ErrorFallback({ error }) {
  const { theme: UITheme } = useThemeStateFromRedux();

  return (
    <div className={UITheme === "dark" ? "error-compo dark" : "error-compo"}>
      <section className="error-msg-cont">
        <img
          src={FeelingSorryPana}
          alt="Sorry got an error with this listing"
          className="sorry-illustrator"
        />
        <h1 className="error-info-text">
          There was an error with this listing.
        </h1>
        <span className="error-info-text span">
          <Link to="/home">Click here</Link> to go back to home page
        </span>
        <pre className="error-code-box">Error Message: {error?.message}</pre>
      </section>
    </div>
  );
}
