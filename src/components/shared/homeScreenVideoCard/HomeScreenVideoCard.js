import React from "react";
import VideoThumbnail from "../videoThumbnail/VideoThumbnail";
import HomeScreenVideoDetails from "../homeScreenVideoDetails/HomeScreenVideoDetails";
import "./homeScreenVideoCard.styles.scss";
import useThemeStateFromRedux from "../../../hooks/useThemeStateFromRedux";

export default function HomeScreenVideoCard({
  timeFromNow,
  thumbnailURL,
  title,
  channelTitle,
  videoId,
}) {
  const { theme: UITheme } = useThemeStateFromRedux();

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
      <HomeScreenVideoDetails
        title={title}
        channelTitle={channelTitle}
        timeFromNow={timeFromNow}
        videoId={videoId}
      />
    </div>
  );
}
