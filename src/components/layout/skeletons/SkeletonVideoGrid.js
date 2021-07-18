import React from "react";
import SkeletonVideoCard from "./SkeletonVideoCard";
import { v4 as uuidv4 } from "uuid";

export default function SkeletonVideoGrid() {
  function renderSkeletonvideoGrid() {
    return Array(8)
      .fill(1)
      .map(() => {
        return <SkeletonVideoCard key={uuidv4()} />;
      });
  }
  return (
    <div className="videos-section-cont-skeleton">
      {renderSkeletonvideoGrid()}
    </div>
  );
}
