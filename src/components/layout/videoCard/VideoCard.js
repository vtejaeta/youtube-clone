import React from "react";
import "./videoCard.styles.scss";

export default function VideoCard({
  timeFromNow,
  thumbnailURL,
  title,
  channelTitle,
}) {
  return (
    <div className="video-container">
      <a
        href="www.google.com"
        className="video-thumbnail"
        data-duration="12:24"
      >
        <img
          className="video-thumbnail-image"
          src={thumbnailURL}
          alt="youtube video thumbnail"
        />
      </a>
      <div className="video-author-details">
        <a href="www.google.com">
          <img
            src="http://unsplash.it/36/36?gravity=center"
            alt="channel-logo"
            className="channel-logo"
          />
        </a>
        <div className="video-details">
          <a href="www.google.com" className="video-title">
            {title}
          </a>
          <a href="www.google.com" className="video-channel-name">
            {channelTitle}
          </a>
          <div className="video-metadata">
            <span>{timeFromNow}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
