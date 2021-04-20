import React from "react";
import YoutubeLight from "../../assets/youtube-light.png";
import SignInButton from "../../components/shared/signInButton/SignInButton";
import "./signInScreen.styles.scss";

export default function SignInScreen() {
  return (
    <div className="sign-in-card">
      <div className="hero-logo-cont">
        <img src={YoutubeLight} alt="Youtube main logo" className="hero-logo" />
      </div>
      <p>Please use below Sign-In to proceed further.</p>
      <hr />
      <SignInButton />
    </div>
  );
}
