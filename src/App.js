import React from "react";
import { Redirect, Router } from "@reach/router";
import SignInScreen from "./screens/signInScreen/SignInScreen";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import SearchResultsScreen from "./screens/searchResultsScreen/SearchResultsScreen";
import useUserStateFromRedux from "./hooks/useUserStateFromRedux";
import WatchVideoScreen from "./screens/watchVideoScreen/WatchVideoScreen";
import PageNotFoundScreen from "./screens/pageNotFoundScreen/PageNotFoundScreen";
import Header from "./components/layout/header/Header";

const ProtectedRoute = ({ component: Component, userEmail, ...rest }) => {
  return userEmail ? (
    <Component {...rest} />
  ) : (
    <Redirect from="" to="/" noThrow />
  );
};

const DefaultRoute = ({ component: Component, userEmail, ...rest }) => {
  return userEmail ? (
    <Redirect from="" to="/home" noThrow />
  ) : (
    <Component {...rest} />
  );
};

function App() {
  const { userEmail } = useUserStateFromRedux();
  return (
    <>
      {userEmail && <Header />}
      <Router>
        <DefaultRoute component={SignInScreen} userEmail={userEmail} path="/" />
        <ProtectedRoute
          component={HomeScreen}
          userEmail={userEmail}
          path="/home"
        />
        <ProtectedRoute
          component={SearchResultsScreen}
          userEmail={userEmail}
          path="/results"
        />
        <ProtectedRoute
          component={WatchVideoScreen}
          userEmail={userEmail}
          path="/watch"
        />
        <DefaultRoute default component={PageNotFoundScreen} />
      </Router>
    </>
  );
}

export default App;
