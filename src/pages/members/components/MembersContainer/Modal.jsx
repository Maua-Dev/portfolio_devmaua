import React from "react";
import "./Modal.css";
import ReactDom from "react-dom";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function ModalTeste({ setModal, open, memberInfo }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <div className="modalCard">
      <div className="modalBg">
        <div className="modalContent">
          <h1>{memberInfo.name}</h1>
          <div className="Content">
            <div className="infoModal">
              <dt>Curso: *Engenharia da Computação*</dt>
              <dt>Ano: *5°*</dt>
              <dt>Idade: *46 anos*</dt>
              <dt>Principais Linguagens e frameworks: *Flutter, NodeJS, C#*</dt>
              <dt>Hobby: *Rhrugbyie*</dt>
            </div>

            <div className="Member">
              <img src={memberInfo.avatar} alt="" className="fotoModal" />
              <div className="socialModal">
                <a
                  className="social socialLinkedin"
                  href="{props.member.linkedinLink}"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillLinkedin />
                </a>
                <a
                  className="social socialGithub"
                  href="{props.member.githubLink}"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}
