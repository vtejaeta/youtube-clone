import { navigate } from "@reach/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "../../components/layout/header/Header";
import SkeletonVideoGrid from "../../components/layout/skeletons/SkeletonVideoGrid";
import VideosGridLayout from "../../components/layout/videosGridLayout/VideosGridLayout";
import useVideos from "../../hooks/useVideos";
import useVideosStateFromRedux from "../../hooks/useVideosStateFromRedux";
import "../homeScreen/homeScreen.styles.scss";

export default function SearchResultsScreen(props) {
  const { userName, userEmail, userPhoto } = useSelector((state) => state.user);
  const { theme: UITheme } = useSelector((state) => state.theme);

  // const dispatch = useDispatch();
  const term = new URL(props.location.href).searchParams.get("search_term");
  const { loading } = useVideosStateFromRedux();

  useVideos(term);

  // useEffect(() => {
  //   const term = new URL(props.location.href).searchParams.get("search_term");
  //   dispatch(searchVideosByTerm(term));

  //   return () => dispatch(resetVideos());
  // }, [props.location, dispatch]);

  useEffect(() => {
    !userName && navigate("/");
  }, [userName]);

  return userName ? (
    <div
      className={
        UITheme === "dark" ? "home-screen-cont dark" : "home-screen-cont"
      }
    >
      <div className="whole-videos-cont">
        <Header
          userPhoto={userPhoto}
          userEmail={userEmail}
          userName={userName}
        />
        {loading ? (
          <SkeletonVideoGrid />
        ) : (
          <div className="video-section-cont">
            <VideosGridLayout />
          </div>
        )}
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
}
