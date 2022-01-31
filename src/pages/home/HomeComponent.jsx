import React from "react";
import "./Home.css";
import logo from "./assets/LogoInteiro.svg";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";

export default function HomeComponent() {
  return (
    <div className="HomeBackground" id="home">
      <MouseParallaxContainer className="container" resetOnLeave>
        <MouseParallaxChild
          factorX={0.01}
          factorY={0.01}
          className="logo-container"
        >
          <img
            src={logo}
            alt="Logo inteiro Dev. Community"
            className="HomeLogo"
          ></img>
        </MouseParallaxChild>
        <video
          className="VideoBg"
          autoPlay
          loop
          muted
          src={"https://i.imgur.com/cDy9FHG.mp4"}
          type="video/mp4"
        ></video>
      </MouseParallaxContainer>
    </div>
  );
}
