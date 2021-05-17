import { useEffect, useState } from "react";

export default function useVideoDetails(videoId) {
  const [state, setState] = useState({
    status: "idle",
    data: null,
    error: null,
  });

  useEffect(() => {
    if (!videoId) {
      return;
    }
    setState({ status: "pending" });
    fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=${process.env.REACT_APP_YOUTUBE_APIKEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setState({ data, status: "resolved" });
      })
      .catch((error) => {
        setState({ error, status: "rejected" });
      });
  }, [videoId]);

  return [state];
}
