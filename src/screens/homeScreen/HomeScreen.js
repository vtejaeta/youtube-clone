import { navigate } from "@reach/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/layout/header/Header";
import VideosGridLayout from "../../components/layout/videosGridLayout/VideosGridLayout";
import { searchVideosByTerm } from "../../features/getVideosByTermSlice";
import "./homeScreen.styles.scss";

export default function HomeScreen() {
  const { userName, userEmail, userPhoto } = useSelector((state) => state.user);
  const { videosByTerm } = useSelector((state) => state.getVideosByTerm);
  const dispatch = useDispatch();

  useEffect(() => {
    // !userName && navigate("/");
    if (!videosByTerm.length) {
      dispatch(searchVideosByTerm("ReactJS"));
    }
  }, [userName, videosByTerm, dispatch]);

  return (
    <div className="home-screen-cont">
      <div className="whole-videos-cont">
        <Header
          userPhoto={userPhoto}
          userEmail={userEmail}
          userName={userName}
        />
        <VideosGridLayout />
      </div>
    </div>
  );
}
