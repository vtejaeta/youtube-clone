import React from "react";
import { Redirect, Router } from "@reach/router";

import SignInScreen from "./screens/signInScreen/SignInScreen";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import SearchResultsScreen from "./screens/searchResultsScreen/SearchResultsScreen";
import WatchVideoScreen from "./screens/watchVideoScreen/WatchVideoScreen";
import PageNotFoundScreen from "./screens/pageNotFoundScreen/PageNotFoundScreen";

import useUserStateFromRedux from "./hooks/useUserStateFromRedux";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";

function App() {
  const { userEmail } = useUserStateFromRedux();

  if (!userEmail) {
    return <SignInScreen path="/" />;
  }

  return (
    <>
      <Header />
      <Router>
        <Redirect from="/" to="/home" noThrow />
        <HomeScreen path="/home" />
        <SearchResultsScreen path="/results" />
        <WatchVideoScreen path="/watch" />
        <PageNotFoundScreen default />
      </Router>
      <Footer />
    </>
  );
}

export default App;
