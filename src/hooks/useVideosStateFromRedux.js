import { useSelector } from "react-redux";

export default function useVideosStateFromRedux() {
  const { loading, videosByTerm, error } = useSelector(
    (state) => state.getVideosByTerm
  );

  return { loading, videosByTerm, error };
}
