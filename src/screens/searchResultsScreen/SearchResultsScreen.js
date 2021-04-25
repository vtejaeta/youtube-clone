import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/layout/header/Header";
import VideosGridLayout from "../../components/layout/videosGridLayout/VideosGridLayout";
import {
  resetVideos,
  searchVideosByTerm,
} from "../../features/getVideosByTermSlice";
import "../homeScreen/homeScreen.styles.scss";

export default function SearchResultsScreen(props) {
  const [searchTerm, setSearchTerm] = useState(null);
  const { userName, userEmail, userPhoto } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    const term = new URL(props.location.href).searchParams.get("search_term");
    setSearchTerm(term.trim());
    searchTerm && dispatch(searchVideosByTerm(searchTerm));

    return () => dispatch(resetVideos());
  }, [props, dispatch, searchTerm]);

  return (
    <div className="whole-videos-cont">
      <Header userPhoto={userPhoto} userEmail={userEmail} userName={userName} />
      <div className="video-section-cont">
        <VideosGridLayout />
      </div>
    </div>
  );
}
