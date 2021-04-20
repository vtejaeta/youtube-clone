import React, { useEffect } from "react";
import "./signInButton.styles.scss";
import GoogleSVG from "../../../assets/google-icon.svg";
import { navigate } from "@reach/router";
import { authenticateUser } from "../../../features/userSlice";
import { useDispatch, useSelector } from "react-redux";

export default function SignInButton() {
  const dispatch = useDispatch();
  const { userEmail } = useSelector((state) => state.user);

  useEffect(() => {
    userEmail && navigate("/home");
  }, [userEmail]);

  function logUserIn() {
    dispatch(authenticateUser());
  }

  return (
    <div className="sign-in btn" onClick={logUserIn}>
      <div className="google-logo-cont">
        <img src={GoogleSVG} alt="Google logo" className="google-svg" />
      </div>
      <p className="sign-in-txt">Sign in with Google </p>
    </div>
  );
}
