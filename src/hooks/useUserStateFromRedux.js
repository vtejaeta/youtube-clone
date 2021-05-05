import { useSelector } from "react-redux";

export default function useUserStateFromRedux() {
  const { userName, userEmail, userPhoto } = useSelector((state) => state.user);

  return { userName, userEmail, userPhoto };
}
