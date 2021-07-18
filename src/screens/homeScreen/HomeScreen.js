import React from "react";

import useVideos from "../../hooks/useVideos";
import useVideosStateFromRedux from "../../hooks/useVideosStateFromRedux";

import VideosLayout from "../../components/layout/videosLayout/VideosLayout";
import SkeletonVideoGrid from "../../components/layout/skeletons/SkeletonVideoGrid";
import HomeScreenVideoCard from "../../components/shared/homeScreenVideoCard/HomeScreenVideoCard";

import ErrorBoundary from "../../errorBoundary/ErrorBoundary";
import ErrorFallback from "../../errorBoundary/ErrorFallback";

import "./homeScreen.styles.scss";

export default function HomeScreen() {
  const { loading } = useVideosStateFromRedux();

  useVideos("JavaScript crash course");

  return (
    <main className="home-screen-cont">
      <div className="whole-videos-cont">
        {loading ? (
          <SkeletonVideoGrid />
        ) : (
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <div className="video-section-cont">
              <VideosLayout Component={HomeScreenVideoCard} />
            </div>
          </ErrorBoundary>
        )}
      </div>
    </main>
  );
}
