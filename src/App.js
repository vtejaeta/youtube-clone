import React, { useEffect, useState } from "react";
import { Redirect, Router } from "@reach/router";
import SignInScreen from "./screens/signInScreen/SignInScreen";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import SearchResultsScreen from "./screens/searchResultsScreen/SearchResultsScreen";
import { getFromLocalStorage } from "./utils/localStorage.utils";

const ProtectedRoute = ({ component: Component, ...rest }) =>
  getFromLocalStorage("_userEmail") ? (
    <Component {...rest} />
  ) : (
    <Redirect from="" to="/" noThrow />
  );

function App() {
  return (
    <Router>
      <SignInScreen path="/" />
      <ProtectedRoute component={HomeScreen} path="/home" />
      <ProtectedRoute component={SearchResultsScreen} path="/results" />
    </Router>
  );
}

export default App;
