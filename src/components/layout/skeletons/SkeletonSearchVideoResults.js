import React from "react";
import { v4 as uuidv4 } from "uuid";

import SkeletonElement from "./SkeletonElement";

import "../../../screens/searchResultsScreen/searchResultsScreen.styles.scss";

export default function SkeletonSearchVideoResults() {
  function renderSkeletonCard() {
    return (
      <div className="skeleton-search-results">
        <SkeletonElement type="thumbnail" />
        <div className="skeleton-video-author-details">
          <SkeletonElement type="title" />
          <SkeletonElement type="meta-text" />
          <div className="skeleton-channel-details">
            <SkeletonElement type="avatar" />
            <SkeletonElement type="text" />
          </div>
          <SkeletonElement type="text" />
          <SkeletonElement type="text" />
          <SkeletonElement type="text" />
        </div>
      </div>
    );
  }

  function renderSkeletonGrid() {
    return Array(10)
      .fill(1)
      .map(() => {
        return (
          <React.Fragment key={uuidv4()}>{renderSkeletonCard()}</React.Fragment>
        );
      });
  }

  return (
    <div className="search-results-video-container-skeleton">
      {renderSkeletonGrid()}
    </div>
  );
}
