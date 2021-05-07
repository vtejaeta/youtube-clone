import React from "react";
import SkeletonVideoCard from "./SkeletonVideoCard";
import useThemeStateFromRedux from "../../../hooks/useThemeStateFromRedux";

export default function SkeletonVideoGrid() {
  const { theme: UITheme } = useThemeStateFromRedux();

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
