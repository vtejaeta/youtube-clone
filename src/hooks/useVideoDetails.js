import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getVideoDetails, resetVideos } from "../features/getVideoDetailsSlice";

export default function useVideosDetails(videoId) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetVideos());
    dispatch(getVideoDetails(videoId));

    return () => dispatch(resetVideos());
  }, [dispatch, videoId]);
}
