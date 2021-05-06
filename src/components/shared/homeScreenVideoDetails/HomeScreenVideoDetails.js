import { Link } from "@reach/router";
import React from "react";

export default function HomeScreenVideoDetails({
  title,
  channelTitle,
  timeFromNow,
  videoId,
}) {
  return (
    <div className="video-author-details">
      <img
        src="http://unsplash.it/36/36?gravity=center"
        alt="channel-logo"
        className="channel-logo"
      />
      <div className="video-details">
        <Link to={`/watch?v=${videoId}`} className="video-title">
          {title}
        </Link>
        <p className="video-channel-name">{channelTitle}</p>
        <div className="video-metadata">
          <span>{timeFromNow}</span>
        </div>
      </div>
    </div>
  );
}
