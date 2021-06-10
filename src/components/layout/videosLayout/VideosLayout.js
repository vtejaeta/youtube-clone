import React from "react";
import moment from "moment";
import useVideosStateFromRedux from "../../../hooks/useVideosStateFromRedux";
import Empty_Pana from "../../../assets/Empty-pana.svg";

export default function VideosLayout({ Component }) {
  const { videosByTerm, error } = useVideosStateFromRedux();

  if (error) {
    throw error;
  }

  function renderVideos() {
    if (videosByTerm.length === 0) {
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
    return videosByTerm.map(({ snippet, id }) => {
      const timeFromNow = moment(
        new Date(snippet.publishTime).toLocaleString()
      ).fromNow();
      return (
        <Component
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
