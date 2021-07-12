import React from "react";
import { useDispatch } from "react-redux";

import YoutubeDark from "../../assets/youtube-dark.svg";
import userPhoto from "../../assets/dummy-user.svg";

import SignInButton from "../../components/shared/signInButton/SignInButton";
import { setActiveUser, authenticateUser } from "../../features/userSlice";

import "./signInScreen.styles.scss";

export default function SignInScreen() {
  const dispatch = useDispatch();

  function logUserIn(isGuest = false) {
    isGuest
      ? dispatch(
          setActiveUser({
            userName: "Guest",
            userEmail: "guest.myapp@gmail.com",
            userPhoto: userPhoto,
          })
        )
      : dispatch(authenticateUser());
  }

  return (
    <section className="whole-cont">
      <div className="sign-in-card">
        <div className="hero-logo-cont">
          <img
            src={YoutubeDark}
            alt="Youtube main logo"
            className="hero-logo"
          />
        </div>
        <p>Please use below sign in to proceed further</p>
        <hr />
        <SignInButton logUserIn={logUserIn} />
        <button className="guest-login-btn" onClick={() => logUserIn(true)}>
          Try Guest login
        </button>
      </div>
    </section>
  );
}
