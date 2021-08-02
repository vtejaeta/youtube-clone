import React, { useCallback, useRef, useState } from "react";
import { navigate } from "@reach/router";

import { logUserOut } from "../../../features/userSlice";
import useUserStateFromRedux from "../../../hooks/useUserStateFromRedux";
import useClickListener from "../../../hooks/useClickListener";

export default function SignOutButton({ dispatch }) {
  const [click, setClick] = useState(false);

  const signoutMenuRef = useRef();

  const { userPhoto } = useUserStateFromRedux();

  const closeMenu = useCallback(() => {
    setClick(false);
  }, []);

  function toggle() {
    setClick((click) => !click);
  }

  useClickListener(signoutMenuRef, closeMenu);

  return (
    <>
      <button
        className="menu-items dropdown"
        id="signout-menu"
        aria-haspopup="true"
        aria-controls="menu-sign-out"
        aria-expanded={click}
        aria-label="menu with user pic"
        onClick={toggle}
      >
        <img src={userPhoto} alt="User pic" />
      </button>
      {click && (
        <div
          className="dropdown-content"
          id="menu-sign-out"
          role="menu"
          aria-labelledby="signout-menu"
          ref={signoutMenuRef}
          tabIndex="0"
        >
          <button
            className="sign-out-btn"
            role="menuitem"
            onClick={() => {
              dispatch(logUserOut());
              navigate("/");
            }}
          >
            Sign out
          </button>
        </div>
      )}
    </>
  );
}
