import React from "react";
import "./Home.css";
import logo from "./assets/LOGO_DEVNOVO.png";
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
        <div className="Bg"></div>
      </MouseParallaxContainer>
    </div>
  );
}
