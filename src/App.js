import React from "react";
import { Redirect, Router } from "@reach/router";
import SignInScreen from "./screens/signInScreen/SignInScreen";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import SearchResultsScreen from "./screens/searchResultsScreen/SearchResultsScreen";
import useUserStateFromRedux from "./hooks/useUserStateFromRedux";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { userEmail } = useUserStateFromRedux();
  return userEmail ? (
    <Component {...rest} />
  ) : (
    <Redirect from="" to="/" noThrow />
  );
};

const DefaultRoute = ({ component: Component, ...rest }) => {
  const { userEmail } = useUserStateFromRedux();
  return userEmail ? (
    <Redirect from="" to="/home" noThrow />
  ) : (
    <Component {...rest} />
  );
};

function App() {
  return (
    <Router>
      <DefaultRoute component={SignInScreen} path="/" />
      <ProtectedRoute component={HomeScreen} path="/home" />
      <ProtectedRoute component={SearchResultsScreen} path="/results" />
    </Router>
  );
}

export default App;
