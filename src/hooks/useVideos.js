import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  resetVideos,
  searchVideosByTerm,
} from "../features/getVideosByTermSlice";

export default function useVideos(searchTerm) {
  const dispatch = useDispatch();

  const { videosByTerm } = useSelector((state) => state.getVideosByTerm);

  useEffect(() => {
    dispatch(resetVideos());
    dispatch(searchVideosByTerm(searchTerm));

    // return () => dispatch(resetVideos());
  }, [dispatch, searchTerm]);

  return videosByTerm;
}
