import { navigate } from "@reach/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "../../components/layout/header/Header";
import VideosGridLayout from "../../components/layout/videosGridLayout/VideosGridLayout";
import useVideos from "../../hooks/useVideos";
import SkeletonVideoGrid from "../../components/layout/skeletons/SkeletonVideoGrid";
import "./homeScreen.styles.scss";
import useVideosStateFromRedux from "../../hooks/useVideosStateFromRedux";

export default function HomeScreen() {
  const { userName, userEmail, userPhoto } = useSelector((state) => state.user);

  const { theme: UITheme } = useSelector((state) => state.theme);
  const { loading } = useVideosStateFromRedux();

  useVideos("ReactJS");
  useEffect(() => {
    !userName && navigate("/");
  }, [userName]);

  return userName ? (
    <div
      className={
        UITheme === "dark" ? "home-screen-cont dark" : "home-screen-cont"
      }
    >
      <div className="whole-videos-cont">
        <Header
          userPhoto={userPhoto}
          userEmail={userEmail}
          userName={userName}
        />
        {loading ? (
          <SkeletonVideoGrid />
        ) : (
          <div className="video-section-cont">
            <VideosGridLayout />
          </div>
        )}
      </div>
    </div>
  ) : (
    <p>Loading..</p>
  );
}
