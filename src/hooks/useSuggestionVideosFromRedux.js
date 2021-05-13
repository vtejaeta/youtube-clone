import { useSelector } from "react-redux";

export default function useVideosStateFromRedux() {
  const { loading, suggestionVideos, error } = useSelector(
    (state) => state.getSuggestionVideos
  );

  return { loading, suggestionVideos, error };
}
