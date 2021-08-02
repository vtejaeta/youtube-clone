import React from "react";

import VideosLayout from "../../components/layout/videosLayout/VideosLayout";
import ResultScreenVideoCard from "../../components/shared/resultScreenVideoCard/ResultScreenVideoCard";
import SkeletonSearchVideoResults from "../../components/layout/skeletons/SkeletonSearchVideoResults";

import useVideos from "../../hooks/useVideos";
import useVideosStateFromRedux from "../../hooks/useVideosStateFromRedux";

import getSearchParam from "../../utils/searchParam.utils";

import ErrorBoundary from "../../errorBoundary/ErrorBoundary";
import ErrorFallback from "../../errorBoundary/ErrorFallback";

import "./searchResultsScreen.styles.scss";

function SearchResultsScreen({ term }) {
  if (!term) {
    const errorMessage = new Error(
      "OOPS! Got invalid url, please try a valid url or go to homepage"
    );
    throw errorMessage;
  }

  useVideos(term);

  const { loading } = useVideosStateFromRedux();

  return (
    <div className="home-screen-cont">
      <div className="whole-videos-cont">
        {loading && <SkeletonSearchVideoResults />}
        <div className="main-videos-cont">
          <p className="search-term-desc">
            Search results for "
            <strong style={{ textTransform: "capitalize" }}>{term}</strong>"
          </p>
          <div className="video-section-cont search-results">
            <VideosLayout Component={ResultScreenVideoCard} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SearchResultsScreenWithErrorBoundary(props) {
  const term = getSearchParam(props.location, "search_term");

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} key={term}>
      <SearchResultsScreen term={term} {...props} />
    </ErrorBoundary>
  );
}
