import React from "react";

import GoogleSVG from "../../../assets/google-icon.svg";

import "./signInButton.styles.scss";

export default function SignInButton({ logUserIn }) {
  return (
    <button className="sign-in btn" onClick={() => logUserIn(false)}>
      <div className="google-logo-cont">
        <img src={GoogleSVG} alt="Google logo" className="google-svg" />
      </div>
      <p className="sign-in-txt">Sign in with Google </p>
    </button>
  );
}
