import React, { useEffect, useRef } from "react";
import getSearchParam from "../../utils/searchParam.utils";
import Header from "../../components/layout/header/Header";
import "./watchVideoScreen.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  resetVideos,
  searchSuggestedVideos,
} from "../../features/getSuggestionVideosSlice";
import SuggestionVideosLayout from "../../components/layout/suggestionVideosLayout/SuggestionVideosLayout";
import useSuggestionVideosFromRedux from "../../hooks/useSuggestionVideosFromRedux";
import SkeletonSearchVideoResults from "../../components/layout/skeletons/SkeletonSearchVideoResults";
import useThemeStateFromRedux from "../../hooks/useThemeStateFromRedux";
import useVideoDetails from "../../hooks/useVideoDetails";
import SkeletonElement from "../../components/layout/skeletons/SkeletonElement";
import ErrorBoundary from "../../errorBoundary/ErrorBoundary";
import ErrorFallback from "../../errorBoundary/ErrorFallback";

export default function WatchVideoScreen(props) {
  const dispatch = useDispatch();
  const term = getSearchParam(props.location, "v");
  const descriptionRef = useRef(null);
  const { loading } = useSuggestionVideosFromRedux();
  const { theme } = useThemeStateFromRedux();
  const { videoDetails } = useSelector((state) => state.getVideoDetails);

  useVideoDetails(term);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    dispatch(resetVideos());
    dispatch(searchSuggestedVideos(term));

    return () => dispatch(resetVideos());
  }, [dispatch, term]);

  function toggleDescription() {
    descriptionRef.current.classList.toggle("complete");
  }

  return (
    <>
      <Header />
      <div
        className={
          theme === "dark" ? "whole-video-wrapper dark" : "whole-video-wrapper"
        }
      >
        <div className="grid-cont">
          <div className="main-video-cont">
            {videoDetails && Boolean(Object.keys(videoDetails).length) ? (
              <>
                <div className="main-video-player-cont">
                  <iframe
                    src={`https://www.youtube.com/embed/${term}`}
                    title="video player"
                    frameBorder="0"
                    allowFullScreen
                    className="main-video-player"
                  />
                </div>
                <p className="main-video-title">{videoDetails.snippet.title}</p>
                <p className="main-video-upload-date">
                  {new Date(videoDetails.snippet.publishedAt).toDateString()}
                </p>
                <div className="main-video-channel-details">
                  <p className="video-channel-name">
                    {videoDetails.snippet.channelTitle}
                  </p>
                  <pre className="video-description" ref={descriptionRef}>
                    {videoDetails.snippet.description}
                  </pre>
                  <button
                    className="show-more-btn"
                    onClick={toggleDescription}
                    data-hover="SHOW LESS"
                  >
                    <span>SHOW MORE</span>
                  </button>
                </div>
              </>
            ) : (
              <div className="video-screen-skeleton">
                <SkeletonElement type="thumbnail" />
                <SkeletonElement type="meta-text" />
                <SkeletonElement type="meta-text" />
                <div className="video-screen-details-skeleton">
                  <SkeletonElement type="text" />
                  <SkeletonElement type="text" />
                  <SkeletonElement type="text" />
                </div>
              </div>
            )}
          </div>
          <div className="next-videos-cont">
            <button className="suggestion-text">Suggestion Videos</button>
            {loading ? (
              <SkeletonSearchVideoResults />
            ) : (
              <ErrorBoundary FallbackComponent={ErrorFallback}>
                <SuggestionVideosLayout />
              </ErrorBoundary>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
