import React from "react";
import { useSelector } from "react-redux";
import Header from "../../components/layout/header/Header";
import SkeletonVideoGrid from "../../components/layout/skeletons/SkeletonVideoGrid";
import VideosLayout from "../../components/layout/videosLayout/VideosLayout";
import ResultScreenVideoCard from "../../components/shared/resultScreenVideoCard/ResultScreenVideoCard";
import useVideos from "../../hooks/useVideos";
import useVideosStateFromRedux from "../../hooks/useVideosStateFromRedux";
import "../homeScreen/homeScreen.styles.scss";
import "../searchResultsScreen/searchResultsScreen.styles.scss";

export default function SearchResultsScreen(props) {
  const { theme: UITheme } = useSelector((state) => state.theme);

  const term = new URL(props.location.href).searchParams.get("search_term");
  const { loading } = useVideosStateFromRedux();

  useVideos(term);

  return (
    <div
      className={
        UITheme === "dark" ? "home-screen-cont dark" : "home-screen-cont"
      }
    >
      <div className="whole-videos-cont">
        <Header />
        {loading ? (
          <SkeletonVideoGrid />
        ) : (
          <div className="video-section-cont search-results">
            <VideosLayout Component={ResultScreenVideoCard} />
          </div>
        )}
      </div>
    </div>
  );
}
