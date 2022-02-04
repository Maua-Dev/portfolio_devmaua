import React from "react";
import "./MiniCardComponent.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
// import ModalTeste from "./ModalTeste";

export default function MiniCardComponent(props) {
  // const [modaCardlOpen, setModalCardOpen] = useState(false);
  return (
    <div className="members">
      <h2 className="memberName">{props.member.name}</h2>
      <img src={props.memberInfo.avatar} alt="" className="foto" />
      <div className="socialContainer">
        <a
          className="social socialLinkedin"
          href={props.member.linkedInLink}
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin />
        </a>
        <a
          className="social socialGithub"
          href={props.member.linkedinLink}
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub />
        </a>
      </div>
    </div>
  );
}
