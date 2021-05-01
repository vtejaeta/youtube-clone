import React from "react";
import { useSelector } from "react-redux";
import SkeletonVideoCard from "./SkeletonVideoCard";

export default function SkeletonVideoGrid() {
  const { theme: UITheme } = useSelector((state) => state.theme);

  function renderSkeletonvideoGrid() {
    return Array(8)
      .fill(1)
      .map(() => {
        return <SkeletonVideoCard key={Math.random()} />;
      });
  }
  return (
    <div
      className={
        UITheme === "dark"
          ? "videos-section-cont-skeleton dark"
          : "videos-section-cont-skeleton"
      }
    >
      {renderSkeletonvideoGrid()}
    </div>
  );
}
