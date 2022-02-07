import React, { useState } from "react";
import "./MiniCardComponent.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import ModalTeste from "./ModalTeste";

export default function MiniCardComponent(props) {
  const [modaCardlOpen, setModalCardOpen] = useState(false); // Abre o modal

  function setModal() {
    setModalCardOpen(!modaCardlOpen);
  }

  return (
    <div className="members" onClick={() => setModal()}>
      <h2 className="memberName">{props.memberInfo.name}</h2>
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
      <ModalTeste
        open={modaCardlOpen}
        memberInfo={props.memberInfo}
        setModalOff={setModal}
      />
    </div>
  );
}
