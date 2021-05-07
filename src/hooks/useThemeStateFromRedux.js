import { useSelector } from "react-redux";

export default function useThemeStateFromRedux() {
  const { theme } = useSelector((state) => state.theme);

  return { theme };
}
