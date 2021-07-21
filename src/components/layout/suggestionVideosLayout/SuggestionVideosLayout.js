import React from "react";
import moment from "moment";

import useSuggestionVideosFromRedux from "../../../hooks/useSuggestionVideosFromRedux";

import ResultScreenVideoCard from "../../shared/resultScreenVideoCard/ResultScreenVideoCard";
import EmptyResults from "../../shared/emptyResults/EmptyResults";

export default function SuggestionVideosLayout() {
  const { suggestionVideos, error } = useSuggestionVideosFromRedux();

  if (error) throw error;

  function renderVideos(suggestionVideos) {
    if (suggestionVideos.length === 0) {
      return <EmptyResults />;
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
            defaultThumbnail={snippet.thumbnails.medium.url}
            videoId={id.videoId}
            title={snippet.title}
            description={snippet.description}
            channelTitle={snippet.channelTitle}
          />
        );
      });
  }

  return <>{suggestionVideos && renderVideos(suggestionVideos)}</>;
}
