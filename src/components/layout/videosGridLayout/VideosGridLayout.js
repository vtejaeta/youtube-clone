import React from "react";
import VideoCard from "../videoCard/VideoCard";
import moment from "moment";
import { useSelector } from "react-redux";

export default function VideosGridLayout() {
  const { videosByTerm } = useSelector((state) => state.getVideosByTerm);

  function renderVideos() {
    return videosByTerm.map(({ snippet, id }) => {
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
  return <div className="video-section-cont">{renderVideos()}</div>;
}
