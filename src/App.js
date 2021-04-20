import React from "react";
import { Router } from "@reach/router";
import SignInScreen from "./screens/signInScreen/SignInScreen";
import HomeScreen from "./screens/homeScreen/HomeScreen";

function App() {
  return (
    <Router>
      <SignInScreen path="/" />
      <HomeScreen path="/home" />
    </Router>
  );
}

export default App;
