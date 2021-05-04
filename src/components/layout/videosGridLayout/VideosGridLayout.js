import React from "react";
import moment from "moment";
import VideoCard from "../videoCard/VideoCard";
import useVideosStateFromRedux from "../../../hooks/useVideosStateFromRedux";

export default function VideosGridLayout() {
  const { videosByTerm } = useVideosStateFromRedux();

  function renderVideos() {
    return videosByTerm?.map(({ snippet, id }) => {
      const timeFromNow = moment(
        new Date(snippet.publishTime).toLocaleString()
      ).fromNow();
      return (
        <VideoCard
          key={id.videoId}
          timeFromNow={timeFromNow}
          thumbnailURL={snippet.thumbnails.medium.url}
          title={snippet.title}
          channelTitle={snippet.channelTitle}
        />
      );
    });
  }
  return <>{renderVideos()}</>;
}
