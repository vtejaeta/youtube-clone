import React from "react";

import VideoThumbnail from "../videoThumbnail/VideoThumbnail";
import ResultScreenVideoDetails from "../resultScreenVideoDetails/ResultScreenVideoDetails";

import "./resultScreenVideoCard.styles.scss";

export default function ResultScreenVideoCard({
  timeFromNow,
  defaultThumbnail,
  title,
  channelTitle,
  videoId,
  description,
}) {
  return (
    <section className="result-video-container">
      <VideoThumbnail
        defaultThumbnail={defaultThumbnail}
        videoId={videoId}
        title={title}
      />
      <ResultScreenVideoDetails
        title={title}
        channelTitle={channelTitle}
        timeFromNow={timeFromNow}
        videoId={videoId}
        description={description}
      />
    </section>
  );
}
