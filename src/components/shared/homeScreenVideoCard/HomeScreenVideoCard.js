import React from "react";
import VideoThumbnail from "../videoThumbnail/VideoThumbnail";
import HomeScreenVideoDetails from "../homeScreenVideoDetails/HomeScreenVideoDetails";
import "./homeScreenVideoCard.styles.scss";
import useThemeStateFromRedux from "../../../hooks/useThemeStateFromRedux";

export default function HomeScreenVideoCard({
  timeFromNow,
  title,
  channelTitle,
  videoId,
  defaultThumbnail,
}) {
  const { theme: UITheme } = useThemeStateFromRedux();

  // throw Error("fknslkca a cvsalknviashvksai vhash vahs ivahv sa hvukhsak");

  return (
    <section
      className={
        UITheme === "dark" ? " video-container dark" : "video-container"
      }
    >
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
