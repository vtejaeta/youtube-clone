import React from "react";
import Header from "../../components/layout/header/Header";
import SkeletonVideoGrid from "../../components/layout/skeletons/SkeletonVideoGrid";
import VideosLayout from "../../components/layout/videosLayout/VideosLayout";
import ResultScreenVideoCard from "../../components/shared/resultScreenVideoCard/ResultScreenVideoCard";
import useVideos from "../../hooks/useVideos";
import useVideosStateFromRedux from "../../hooks/useVideosStateFromRedux";
import useThemeStateFromRedux from "../../hooks/useThemeStateFromRedux";
import "../homeScreen/homeScreen.styles.scss";
import "../searchResultsScreen/searchResultsScreen.styles.scss";
import SkeletonSearchVideoResults from "../../components/layout/skeletons/SkeletonSearchVideoResults";
import getSearchParam from "../../utils/searchParam.utils";

export default function SearchResultsScreen(props) {
  const { theme: UITheme } = useThemeStateFromRedux();

  const term = getSearchParam(props.location, "search_term");
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
          <SkeletonSearchVideoResults />
        ) : (
          <div className="main-videos-cont">
            {term && (
              <p className="search-term-desc">
                Search results for{" "}
                <strong style={{ textTransform: "capitalize" }}>{term}</strong>
              </p>
            )}
            <div className="video-section-cont search-results">
              <VideosLayout Component={ResultScreenVideoCard} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
