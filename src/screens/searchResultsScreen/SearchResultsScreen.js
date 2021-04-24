import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import VideosGridLayout from "../../components/layout/videosGridLayout/VideosGridLayout";
import { searchVideosByTerm } from "../../features/getVideosByTermSlice";

export default function SearchResultsScreen(props) {
  const [searchTerm, setSearchTerm] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const term = new URL(props.location.href).searchParams.get("search_term");
    setSearchTerm(term.trim());
    searchTerm && dispatch(searchVideosByTerm(searchTerm));
  }, [props, dispatch, searchTerm]);

  return (
    <div className="whole-videos-cont">
      <VideosGridLayout />
    </div>
  );
}
