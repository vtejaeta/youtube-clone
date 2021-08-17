import React, { useCallback, useEffect, useRef, useState } from "react";
import { navigate } from "@reach/router";

import { logUserOut } from "../../../features/userSlice";
import useUserStateFromRedux from "../../../hooks/useUserStateFromRedux";
import useClickListener from "../../../hooks/useClickListener";

export default function SignOutButton({ dispatch }) {
  const [click, setClick] = useState(false);

  const signoutMenuRef = useRef();
  const menuIconRef = useRef();

  const { userPhoto } = useUserStateFromRedux();

  const closeMenu = useCallback(() => {
    setClick(false);
  }, []);

  function toggle() {
    setClick((click) => !click);
  }

  useEffect(() => {
    function shiftFocus(e) {
      if (e.key === "Tab" || e.keyCode === 9) {
        if (!e.shiftKey && document.activeElement === menuIconRef.current) {
          setClick(true);
          signoutMenuRef.current && signoutMenuRef.current.focus();
          e.preventDefault();
        }
      }
    }

    window.addEventListener("keydown", shiftFocus);

    return () => {
      window.removeEventListener("keydown", shiftFocus);
    };
  }, []);

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
        ref={menuIconRef}
      >
        <img src={userPhoto} alt="User pic" />
      </button>
      {click && (
        <div
          className="dropdown-content"
          id="menu-sign-out"
          role="menu"
          aria-labelledby="signout-menu"
        >
          <button
            className="sign-out-btn"
            role="menuitem"
            ref={signoutMenuRef}
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
