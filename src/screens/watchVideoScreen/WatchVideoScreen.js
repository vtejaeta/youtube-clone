import React, { useEffect } from "react";
import getSearchParam from "../../utils/searchParam.utils";
import Header from "../../components/layout/header/Header";
import "./watchVideoScreen.styles.scss";
import { useDispatch } from "react-redux";
import {
  resetVideos,
  searchSuggestedVideos,
} from "../../features/getSuggestionVideosSlice";
import SuggestionVideosLayout from "../../components/layout/suggestionVideosLayout/SuggestionVideosLayout";
import useSuggestionVideosFromRedux from "../../hooks/useSuggestionVideosFromRedux";
import SkeletonSearchVideoResults from "../../components/layout/skeletons/SkeletonSearchVideoResults";
import useThemeStateFromRedux from "../../hooks/useThemeStateFromRedux";

export default function WatchVideoScreen(props) {
  const dispatch = useDispatch();
  const term = getSearchParam(props.location, "v");
  const { loading } = useSuggestionVideosFromRedux();
  const { theme } = useThemeStateFromRedux();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    dispatch(resetVideos());
    dispatch(searchSuggestedVideos(term));

    return () => dispatch(resetVideos());
  }, [dispatch, term]);

  return (
    <>
      <Header />
      <div
        className={
          theme === "dark" ? "whole-video-wrapper dark" : "whole-video-wrapper"
        }
      >
        <div className="grid-cont">
          <div className="main-video-player-cont">
            <iframe
              src={`https://www.youtube.com/embed/${term}`}
              title="video player"
              frameBorder="0"
              allowFullScreen
              className="main-video-player"
            />
          </div>
          <div className="next-videos-cont">
            <button className="suggestion-text">Suggestion Videos</button>
            {loading ? (
              <SkeletonSearchVideoResults />
            ) : (
              <SuggestionVideosLayout />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
