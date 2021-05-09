import React from "react";
import SkeletonVideoCard from "./SkeletonVideoCard";
import { v4 as uuidv4 } from "uuid";
import useThemeStateFromRedux from "../../../hooks/useThemeStateFromRedux";

export default function SkeletonVideoGrid() {
  const { theme: UITheme } = useThemeStateFromRedux();

  function renderSkeletonvideoGrid() {
    return Array(8)
      .fill(1)
      .map(() => {
        return <SkeletonVideoCard key={uuidv4()} />;
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
