import React, { useRef } from "react";

export default function VideoDetails({ videoDetails }) {
  const descriptionRef = useRef(null);

  function toggleDescription() {
    descriptionRef.current.classList.toggle("complete");
  }

  return (
    <>
      <p className="main-video-title">{videoDetails.snippet.title}</p>
      <p className="main-video-upload-date">
        {new Date(videoDetails.snippet.publishedAt).toDateString()}
      </p>
      <div className="main-video-channel-details">
        <p className="video-channel-name">
          {videoDetails.snippet.channelTitle}
        </p>
        {videoDetails.snippet.description && (
          <>
            <pre className="video-description" ref={descriptionRef}>
              {videoDetails.snippet.description}
            </pre>
            <button
              className="show-more-btn"
              onClick={toggleDescription}
              data-hover="SHOW LESS"
            >
              <span>SHOW MORE</span>
            </button>
          </>
        )}
      </div>
    </>
  );
}
