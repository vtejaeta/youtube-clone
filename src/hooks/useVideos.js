import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  resetVideos,
  searchVideosByTerm,
} from "../features/getVideosByTermSlice";

export default function useVideos(searchTerm) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchVideosByTerm(searchTerm));

    return () => {
      dispatch(resetVideos());
    };
  }, [dispatch, searchTerm]);
}
