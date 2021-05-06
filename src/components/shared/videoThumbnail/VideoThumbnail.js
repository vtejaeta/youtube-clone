import { Link } from "@reach/router";
import React from "react";

export default function VideoThumbnail({ thumbnailURL, videoId, title }) {
  return (
    <Link to={`/watch?v=${videoId}`} className="video-thumbnail">
      <img className="video-thumbnail-image" src={thumbnailURL} alt={title} />
    </Link>
  );
}
