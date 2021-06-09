import React from "react";
import VideoThumbnail from "../videoThumbnail/VideoThumbnail";
import ResultScreenVideoDetails from "../resultScreenVideoDetails/ResultScreenVideoDetails";
import useThemeStateFromRedux from "../../../hooks/useThemeStateFromRedux";
import "./resultScreenVideoCard.styles.scss";

export default function ResultScreenVideoCard({
  timeFromNow,
  thumbnailURL,
  title,
  channelTitle,
  videoId,
  description,
}) {
  const { theme: UITheme } = useThemeStateFromRedux();

  return (
    <div
      className={
        UITheme === "dark"
          ? " result-video-container dark"
          : "result-video-container"
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
        description={description}
      />
    </div>
  );
}
