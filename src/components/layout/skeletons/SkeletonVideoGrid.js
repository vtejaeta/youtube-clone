import React from "react";
import { v4 as uuidv4 } from "uuid";

import SkeletonVideoCard from "./SkeletonVideoCard";

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
