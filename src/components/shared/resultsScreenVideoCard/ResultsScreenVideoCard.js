import React from "react";
import { useSelector } from "react-redux";
import VideoThumbnail from "../videoThumbnail/VideoThumbnail";
import ResultScreenVideoDetails from "../resultScreenVideoDetails/ResultScreenVideoDetails";

export default function ResultsScreenVideoCard({
  timeFromNow,
  thumbnailURL,
  title,
  channelTitle,
  videoId,
}) {
  const { theme: UITheme } = useSelector((state) => state.theme);

  return (
    <div
      className={
        UITheme === "dark" ? " video-container dark" : "video-container"
      }
    >
      <VideoThumbnail
        thumbnailURL={thumbnailURL}
        videoId={videoId}
        title={title}
      />
      <ResultScreenVideoDetails
        title={title}
        channelTitle={channelTitle}
        timeFromNow={timeFromNow}
        videoId={videoId}
      />
    </div>
  );
}
