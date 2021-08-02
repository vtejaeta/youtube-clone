import React from "react";

import GoogleSVG from "../../../assets/google-icon.svg";

import "./signInButton.styles.scss";

export default function SignInButton({ logUserIn }) {
  return (
    <div
      className="sign-in btn"
      role="button"
      tabIndex="0"
      onClick={() => logUserIn(false)}
      onKeyPress={() => logUserIn(false)}
    >
      <div className="google-logo-cont">
        <img src={GoogleSVG} alt="Google logo" className="google-svg" />
      </div>
      <p className="sign-in-txt">Sign in with Google </p>
    </div>
  );
}
