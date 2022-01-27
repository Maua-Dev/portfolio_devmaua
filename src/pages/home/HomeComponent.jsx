import React from "react";
import "./Home.css";

export default function HomeComponent() {
  return (
    <div className="HomeBackground" id="home">
      <video
        className="VideoBg"
        autoPlay
        loop
        muted
        src={"https://i.imgur.com/M7dR7Aj.mp4"}
        type="video/mp4"
      ></video>
    </div>
  );
}
