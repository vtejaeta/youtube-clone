import React from "react";
import { Link } from "@reach/router";

import FeelingSorryPana from "../assets/Feeling sorry-pana.svg";

import "./ErrorFallback.styles.scss";

export default function ErrorFallback({ error }) {
  return (
    <div className="error-compo">
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
