import React from "react";
import SkeletonElement from "./SkeletonElement";
import "../../shared/homeScreenVideoCard/homeScreenVideoCard.styles.scss";

export default function SkeletonVideoCard() {
  return (
    <div className="video-container-skeleton">
      <SkeletonElement type="thumbnail" />
      <div className="video-author-details-skeleton">
        <SkeletonElement type="avatar" />
        <div className="video-details-skeleton">
          <SkeletonElement type="title" />
          <SkeletonElement type="text" />
          <div className="video-metadata-skeleton">
            <SkeletonElement type="text" />
          </div>
        </div>
      </div>
    </div>
  );
}
