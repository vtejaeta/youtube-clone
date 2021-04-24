import React from "react";
import { Router } from "@reach/router";
import SignInScreen from "./screens/signInScreen/SignInScreen";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import SearchResultsScreen from "./screens/searchResultsScreen/SearchResultsScreen";

function App() {
  return (
    <Router>
      <SignInScreen path="/" />
      <HomeScreen path="/home" />
      <SearchResultsScreen path="/results" />
    </Router>
  );
}

export default App;
