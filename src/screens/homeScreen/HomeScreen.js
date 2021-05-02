import { navigate } from "@reach/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/layout/header/Header";
import VideosGridLayout from "../../components/layout/videosGridLayout/VideosGridLayout";
import { searchVideosByTerm } from "../../features/getVideosByTermSlice";
import "./homeScreen.styles.scss";

export default function HomeScreen(props) {
  const { userName, userEmail, userPhoto } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const { videosByTerm } = useSelector((state) => state.getVideosByTerm);
  const { theme: UITheme } = useSelector((state) => state.theme);

  useEffect(() => {
    !userName && navigate("/");
    if (!videosByTerm.length) {
      // dispatch(searchVideosByTerm("ReactJS"));
    }
  }, [userName, videosByTerm, dispatch, props]);

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
        {/* <SkeletonVideoGrid /> */}
        <div className="video-section-cont">
          <VideosGridLayout />
        </div>
      </div>
    </div>
  ) : (
    <p>Loading..</p>
  );
}
