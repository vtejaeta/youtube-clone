import { useSelector } from "react-redux";

export default function useSuggestionVideosFromRedux() {
  const { loading, suggestionVideos, error } = useSelector(
    (state) => state.getSuggestionVideos
  );

  return { loading, suggestionVideos, error };
}
