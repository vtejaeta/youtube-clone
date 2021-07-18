import React from "react";
import VideoThumbnail from "../videoThumbnail/VideoThumbnail";
import HomeScreenVideoDetails from "../homeScreenVideoDetails/HomeScreenVideoDetails";
import "./homeScreenVideoCard.styles.scss";

export default function HomeScreenVideoCard({
  timeFromNow,
  title,
  channelTitle,
  videoId,
  defaultThumbnail,
}) {
  return (
    <section className="video-container">
      <VideoThumbnail
        videoId={videoId}
        title={title}
        defaultThumbnail={defaultThumbnail}
      />
      <HomeScreenVideoDetails
        title={title}
        channelTitle={channelTitle}
        timeFromNow={timeFromNow}
        videoId={videoId}
      />
    </section>
  );
}
