import React from "react";
import SkeletonElement from "./SkeletonElement";
import "../videoCard/videoCard.styles.scss";
import { useSelector } from "react-redux";

export default function SkeletonVideoCard() {
  const { theme: UITheme } = useSelector((state) => state.theme);

  return (
    <div
      className={
        UITheme === "dark"
          ? "video-container-skeleton dark"
          : "video-container-skeleton"
      }
    >
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
