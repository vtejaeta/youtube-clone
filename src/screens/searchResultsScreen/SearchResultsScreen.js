import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/layout/header/Header";
import VideosGridLayout from "../../components/layout/videosGridLayout/VideosGridLayout";
import {
  resetVideos,
  searchVideosByTerm,
} from "../../features/getVideosByTermSlice";
import "../homeScreen/homeScreen.styles.scss";

export default function SearchResultsScreen(props) {
  const { userName, userEmail, userPhoto } = useSelector((state) => state.user);
  const { theme: UITheme } = useSelector((state) => state.theme);

  const dispatch = useDispatch();

  useEffect(() => {
    const term = new URL(props.location.href).searchParams.get("search_term");
    console.log({ term });
    // dispatch(searchVideosByTerm(term));

    return () => dispatch(resetVideos());
  }, [props.location, dispatch]);

  return (
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
        <div className="video-section-cont">
          <VideosGridLayout />
        </div>
      </div>
    </div>
  );
}
