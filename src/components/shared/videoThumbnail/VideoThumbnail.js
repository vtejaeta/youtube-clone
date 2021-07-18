import React from "react";
import { Link } from "@reach/router";

export default function VideoThumbnail({ videoId, title, defaultThumbnail }) {
  return (
    <Link to={`/watch?v=${videoId}`} className="video-thumbnail">
      <img
        className="video-thumbnail-image"
        src={defaultThumbnail}
        alt={title}
      />
    </Link>
  );
}
