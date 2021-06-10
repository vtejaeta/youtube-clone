import React from "react";
import moment from "moment";
import useSuggestionVideosFromRedux from "../../../hooks/useSuggestionVideosFromRedux";
import Empty_Pana from "../../../assets/Empty-pana.svg";
import ResultScreenVideoCard from "../../shared/resultScreenVideoCard/ResultScreenVideoCard";

export default function SuggestionVideosLayout() {
  const { suggestionVideos, error } = useSuggestionVideosFromRedux();

  if (error) throw error;

  function renderVideos() {
    if (suggestionVideos.length === 0) {
      return (
        <>
          <img
            src={Empty_Pana}
            alt="Empty results"
            className="empty-results-logo"
          />
          <strong className="empty-results">No results found</strong>
        </>
      );
    }
    return suggestionVideos
      .filter(({ snippet }) => snippet !== undefined)
      .map(({ snippet, id }) => {
        const timeFromNow = moment(
          new Date(snippet.publishTime).toLocaleString()
        ).fromNow();
        return (
          <ResultScreenVideoCard
            key={id.videoId}
            timeFromNow={timeFromNow}
            thumbnailURL={snippet.thumbnails.medium.url}
            videoId={id.videoId}
            title={snippet.title}
            description={snippet.description}
            channelTitle={snippet.channelTitle}
          />
        );
      });
  }

  return <>{renderVideos()}</>;
}
