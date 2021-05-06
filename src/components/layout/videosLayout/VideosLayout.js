import React from "react";
import moment from "moment";
import useVideosStateFromRedux from "../../../hooks/useVideosStateFromRedux";

export default function VideosLayout({ Component }) {
  const { videosByTerm } = useVideosStateFromRedux();

  function renderVideos() {
    return videosByTerm?.map(({ snippet, id }) => {
      const timeFromNow = moment(
        new Date(snippet.publishTime).toLocaleString()
      ).fromNow();
      console.log(snippet.description);
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
