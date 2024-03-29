import React from "react";
import { formatDistanceToNowStrict } from "date-fns";

import EmptyResults from "../../shared/emptyResults/EmptyResults";
import useVideosStateFromRedux from "../../../hooks/useVideosStateFromRedux";

export default function VideosLayout({ Component }) {
  const { videosByTerm, error } = useVideosStateFromRedux();

  if (error) {
    throw error;
  }

  function renderVideos(videosByTerm) {
    if (videosByTerm.length === 0) {
      return <EmptyResults />;
    }

    return videosByTerm.map(({ snippet, id }) => {
      // const timeFromNow = moment(
      //   new Date(snippet.publishTime).toLocaleString()
      // ).fromNow();

      const timeFromNow = `${formatDistanceToNowStrict(
        new Date(snippet.publishTime),
        new Date(),
        { addSuffix: true }
      )} ago`;

      return (
        <Component
          key={id.videoId}
          timeFromNow={timeFromNow}
          defaultThumbnail={snippet.thumbnails.medium.url}
          videoId={id.videoId}
          title={snippet.title}
          description={snippet.description}
          channelTitle={snippet.channelTitle}
        />
      );
    });
  }
  return <>{videosByTerm && renderVideos(videosByTerm)}</>;
}
