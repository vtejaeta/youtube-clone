import React from "react";
import getSearchParam from "../../utils/searchParam.utils";
import Header from "../../components/layout/header/Header";
import "./watchVideoScreen.styles.scss";

export default function WatchVideoScreen(props) {
  const term = getSearchParam(props.location, "v");

  return (
    <>
      <Header />
      <div className="whole-video-wrapper">
        <div className="main-video-player-cont">
          <iframe
            src={`https://www.youtube.com/embed/${term}`}
            title="video player"
            frameBorder="0"
            allowFullScreen
            className="main-video-player"
          />
        </div>
      </div>
      {/* <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div> */}
    </>
  );
}
