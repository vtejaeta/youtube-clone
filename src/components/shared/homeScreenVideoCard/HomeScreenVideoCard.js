import React from "react";
import { useSelector } from "react-redux";
import VideoThumbnail from "../videoThumbnail/VideoThumbnail";
import HomeScreenVideoDetails from "../homeScreenVideoDetails/HomeScreenVideoDetails";
import "./homeScreenVideoCard.styles.scss";

export default function HomeScreenVideoCard({
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
      <HomeScreenVideoDetails
        title={title}
        channelTitle={channelTitle}
        timeFromNow={timeFromNow}
        videoId={videoId}
      />
    </div>
  );
}
