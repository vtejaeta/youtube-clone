import React from "react";
import { navigate } from "@reach/router";

import { logUserOut } from "../../../features/userSlice";
import useUserStateFromRedux from "../../../hooks/useUserStateFromRedux";

export default function SignOutButton({ dispatch }) {
  const { userPhoto } = useUserStateFromRedux();

  return (
    <div className="menu-items dropdown">
      <img src={userPhoto} alt="User info" />
      <div className="dropdown-content">
        <button
          className="sign-out-btn"
          onClick={() => {
            dispatch(logUserOut());
            navigate("/");
          }}
        >
          Sign out
        </button>
      </div>
    </div>
  );
}
