import React from "react";
import YoutubeDark from "../../assets/youtube-dark.png";
import SignInButton from "../../components/shared/signInButton/SignInButton";
import "./signInScreen.styles.scss";
import { useDispatch } from "react-redux";
import { setActiveUser, authenticateUser } from "../../features/userSlice";

export default function SignInScreen() {
  const dispatch = useDispatch();

  function logUserIn(isGuest = false) {
    isGuest
      ? dispatch(
          setActiveUser({
            userName: "Guest",
            userEmail: "guest.myapp@gmail.com",
            userPhoto:
              "https://img.icons8.com/cotton/2x/gender-neutral-user--v2.png",
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
        <p>Please use below Sign-In to proceed further.</p>
        <hr />
        <SignInButton logUserIn={logUserIn} />
        <button className="guest-login-btn" onClick={() => logUserIn(true)}>
          Try Guest login
        </button>
      </div>
    </section>
  );
}
