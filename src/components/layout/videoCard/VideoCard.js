import React from "react";
import "./videoCard.styles.scss";

export default function VideoCard() {
  return (
    <div className="video-container">
      <a
        href="www.google.com"
        className="video-thumbnail"
        data-duration="12:24"
      >
        <img
          className="video-thumbnail-image"
          src="http://unsplash.it/250/150?gravity=center"
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
            Random name and Video title
          </a>
          <a href="www.google.com" className="video-channel-name">
            Channel name
          </a>
          <div className="video-metadata">
            <span>12k views</span> • <span>1 week ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}
