import React from "react";
import SkeletonElement from "./SkeletonElement";

export default function SkeletonVideoPlayer() {
  return (
    <div className="video-screen-skeleton">
      <SkeletonElement type="meta-text" />
      <SkeletonElement type="meta-text" />
      <div className="video-screen-details-skeleton">
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
      </div>
    </div>
  );
}
