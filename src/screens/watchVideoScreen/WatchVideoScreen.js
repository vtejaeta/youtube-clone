import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import getSearchParam from "../../utils/searchParam.utils";

import {
  resetSuggestionVideos,
  searchSuggestedVideos,
} from "../../features/getSuggestionVideosSlice";

import SuggestionVideosLayout from "../../components/layout/suggestionVideosLayout/SuggestionVideosLayout";
import SkeletonSearchVideoResults from "../../components/layout/skeletons/SkeletonSearchVideoResults";
import VideoDetails from "../../components/shared/videoDetails/VideoDetails";
import SkeletonVideoPlayer from "../../components/layout/skeletons/SkeletonVideoPlayer";

import useVideoDetails from "../../hooks/useVideoDetails";
import useSuggestionVideosFromRedux from "../../hooks/useSuggestionVideosFromRedux";

import ErrorBoundary from "../../errorBoundary/ErrorBoundary";
import ErrorFallback from "../../errorBoundary/ErrorFallback";

import "./watchVideoScreen.styles.scss";

export default function WatchVideoScreen(props) {
  const term = getSearchParam(props.location, "v");

  const dispatch = useDispatch();

  const { loading: loadingSuggestionVideos } = useSuggestionVideosFromRedux();
  const { loading: loadingVideoDetails, videoDetails } = useSelector(
    (state) => state.getVideoDetails
  );

  // if (error) throw error;

  useVideoDetails(term);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    dispatch(searchSuggestedVideos(term));

    return () => dispatch(resetSuggestionVideos());
  }, [dispatch, term]);

  return (
    <>
      <div className="whole-video-wrapper">
        <div className="grid-cont">
          <div className="main-video-cont">
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <div className="main-video-player-cont">
                <iframe
                  src={`https://www.youtube.com/embed/${term}`}
                  title="video player"
                  frameBorder="0"
                  allowFullScreen
                  className="main-video-player"
                />
              </div>
            </ErrorBoundary>
            {videoDetails && (
              <>
                <VideoDetails videoDetails={videoDetails} />
              </>
            )}
            {loadingVideoDetails && <SkeletonVideoPlayer />}
          </div>
          <div className="next-videos-cont">
            <button className="suggestion-text">Suggestion Videos</button>
            {loadingSuggestionVideos ? (
              <SkeletonSearchVideoResults />
            ) : (
              <ErrorBoundary FallbackComponent={ErrorFallback} key={term}>
                <SuggestionVideosLayout />
              </ErrorBoundary>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
