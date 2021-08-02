import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getVideoDetails,
  resetVideoDetails,
} from "../features/getVideoDetailsSlice";

export default function useVideosDetails(videoId) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideoDetails(videoId));

    return () => dispatch(resetVideoDetails());
  }, [dispatch, videoId]);
}
