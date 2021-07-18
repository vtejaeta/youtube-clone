import React from "react";

import VideosLayout from "../../components/layout/videosLayout/VideosLayout";
import ResultScreenVideoCard from "../../components/shared/resultScreenVideoCard/ResultScreenVideoCard";
import SkeletonSearchVideoResults from "../../components/layout/skeletons/SkeletonSearchVideoResults";

import useVideos from "../../hooks/useVideos";
import useVideosStateFromRedux from "../../hooks/useVideosStateFromRedux";

import getSearchParam from "../../utils/searchParam.utils";

import ErrorBoundary from "../../errorBoundary/ErrorBoundary";
import ErrorFallback from "../../errorBoundary/ErrorFallback";

import "../searchResultsScreen/searchResultsScreen.styles.scss";

export default function SearchResultsScreen(props) {
  const term = getSearchParam(props.location, "search_term");
  const { loading } = useVideosStateFromRedux();

  useVideos(term);

  return (
    <div className="home-screen-cont">
      <div className="whole-videos-cont">
        {loading ? (
          <SkeletonSearchVideoResults />
        ) : (
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <div className="main-videos-cont">
              {term && (
                <p className="search-term-desc">
                  Search results for{" "}
                  <strong style={{ textTransform: "capitalize" }}>
                    {term}
                  </strong>
                </p>
              )}
              <div className="video-section-cont search-results">
                <VideosLayout Component={ResultScreenVideoCard} />
              </div>
            </div>
          </ErrorBoundary>
        )}
      </div>
    </div>
  );
}
