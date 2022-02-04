import React from "react";
import "./MiniCardComponent.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function MiniCardComponent(props) {
  return (
    <div className="members" key={props.i}>
      <h2 className="memberName">{props.member.name}</h2>
      <img src={props.memberInfo.avatar} alt="" className="foto" />
      <div className="socialContainer">
        <a
          className="social socialLinkedin"
          href="https://www.linkedin.com/feed/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin />
        </a>
        <a
          className="social socialGithub"
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub />
        </a>
      </div>
    </div>
  );
}
