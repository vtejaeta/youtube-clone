import { Link } from "@reach/router";
import React from "react";
import "./resultScreenVideoDetails.styles.scss";

export default function ResultScreenVideoDetails({
  title,
  channelTitle,
  timeFromNow,
  description,
  videoId,
}) {
  return (
    <div className="video-author-details">
      <Link to={`/watch?v=${videoId}`} className="video-title">
        {title}
      </Link>
      <div className="video-metadata">
        <span>{timeFromNow}</span>
      </div>
      <div className="channel-details">
        <img
          src="http://unsplash.it/36/36?gravity=center"
          alt="channel-logo"
          className="channel-logo"
        />
        <p className="video-channel-name">{channelTitle}</p>
      </div>
      <div className="description">
        <p>{description}</p>
      </div>
    </div>
  );
}
