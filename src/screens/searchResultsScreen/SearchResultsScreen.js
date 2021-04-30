import { useLocation } from "@reach/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/layout/header/Header";
import VideosGridLayout from "../../components/layout/videosGridLayout/VideosGridLayout";
import {
  resetVideos,
  searchVideosByTerm,
} from "../../features/getVideosByTermSlice";

import "../homeScreen/homeScreen.styles.scss";

export default function SearchResultsScreen() {
  const [searchTerm, setSearchTerm] = useState(null);
  const location = useLocation();
  const { userName, userEmail, userPhoto } = useSelector((state) => state.user);
  const { theme: UITheme } = useSelector((state) => state.theme);

  const dispatch = useDispatch();

  useEffect(() => {
    const term = new URL(location.href).searchParams.get("search_term");
    term.trim() !== searchTerm && setSearchTerm(term.trim());
    if (searchTerm) {
      dispatch(resetVideos());
      dispatch(searchVideosByTerm(searchTerm));
    }

    // return () => dispatch(resetVideos());
  }, [location, dispatch, searchTerm]);

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
