import { navigate } from "@reach/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import VideoCard from "../../components/layout/videoCard/VideoCard";
import "./homeScreen.styles.scss";

export default function HomeScreen() {
  const { userName, userEmail, userPhoto } = useSelector((state) => state.user);

  useEffect(() => {
    !userName && navigate("/");
  }, [userName]);

  return (
    <div className="home-screen-cont">
      <div className="whole-videos-cont">
        <div className="video-section-cont">
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
        </div>
        <div className="video-section-cont">
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
        </div>
      </div>
    </div>
  );
}
