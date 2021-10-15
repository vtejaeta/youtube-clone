import React from "react";
import { Link } from "@reach/router";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function VideoThumbnail({ videoId, title, defaultThumbnail }) {
  return (
    <Link to={`/watch?v=${videoId}`} className="video-thumbnail">
      <LazyLoadImage
        className="video-thumbnail-image"
        src={defaultThumbnail}
        alt={title}
      />
    </Link>
  );
}
