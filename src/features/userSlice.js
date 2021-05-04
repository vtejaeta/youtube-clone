import { createSlice } from "@reduxjs/toolkit";
import { auth, provider } from "../utils/firebase.utils";
import {
  saveToLocalStorage,
  getFromLocalStorage,
  removeFromLocalStorage,
} from "../utils/localStorage.utils";

const initialState = {
  userName: getFromLocalStorage("_userName") || null,
  userEmail: getFromLocalStorage("_userEmail") || null,
  userPhoto: getFromLocalStorage("_userPhoto") || null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      var {
        userName: payloadUserName,
        userEmail: payloadUserEmail,
        userPhoto: payloadUserPhoto,
      } = action.payload;
      state.userName = payloadUserName;
      state.userEmail = payloadUserEmail;
      state.userPhoto = payloadUserPhoto;

      saveToLocalStorage("_userName", payloadUserName);
      saveToLocalStorage("_userEmail", payloadUserEmail);
      saveToLocalStorage("_userPhoto", payloadUserPhoto);
    },
    setUserLogOutState: (state) => {
      state.userName = null;
      state.userEmail = null;
      state.userPhoto = null;

      removeFromLocalStorage("_userName");
      removeFromLocalStorage("_userEmail");
      removeFromLocalStorage("_userPhoto");
    },
  },
});

export const authenticateUser = () => async (dispatch) => {
  try {
    const { user } = await auth.signInWithPopup(provider);
    dispatch(
      setActiveUser({
        userName: user.displayName,
        userEmail: user.email,
        userPhoto: user.photoURL,
      })
    );
  } catch (error) {
    console.error(error);
  }
};

export const logUserOut = () => async (dispatch) => {
  try {
    await auth.signOut();
    dispatch(setUserLogOutState());
  } catch (error) {
    console.error(error);
  }
};

export const { setActiveUser, setUserLogOutState } = userSlice.actions;
export default userSlice.reducer;
