import React from "react";
import "./signInButton.styles.scss";
import GoogleSVG from "../../../assets/google-icon.svg";

export default function SignInButton({ logUserIn }) {
  return (
    <div className="sign-in btn" onClick={() => logUserIn(false)}>
      <div className="google-logo-cont">
        <img src={GoogleSVG} alt="Google logo" className="google-svg" />
      </div>
      <p className="sign-in-txt">Sign in with Google </p>
    </div>
  );
}
