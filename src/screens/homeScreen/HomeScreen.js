import React from "react";
import VideosLayout from "../../components/layout/videosLayout/VideosLayout";
import useVideos from "../../hooks/useVideos";
import SkeletonVideoGrid from "../../components/layout/skeletons/SkeletonVideoGrid";
import HomeScreenVideoCard from "../../components/shared/homeScreenVideoCard/HomeScreenVideoCard";
import "./homeScreen.styles.scss";
import useVideosStateFromRedux from "../../hooks/useVideosStateFromRedux";
import useThemeStateFromRedux from "../../hooks/useThemeStateFromRedux";
import ErrorBoundary from "../../errorBoundary/ErrorBoundary";
import ErrorFallback from "../../errorBoundary/ErrorFallback";

export default function HomeScreen() {
  const { theme: UITheme } = useThemeStateFromRedux();
  const { loading } = useVideosStateFromRedux();

  useVideos("JavaScript crash course");

  return (
    <div
      className={
        UITheme === "dark" ? "home-screen-cont dark" : "home-screen-cont"
      }
    >
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
    </div>
  );
}
