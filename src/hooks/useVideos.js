import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  resetVideos,
  searchVideosByTerm,
} from "../features/getVideosByTermSlice";

export default function useVideos(searchTerm = "ReactJS") {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetVideos());
    dispatch(searchVideosByTerm(searchTerm));

    // return () => dispatch(resetVideos());
  }, [dispatch, searchTerm]);
}
