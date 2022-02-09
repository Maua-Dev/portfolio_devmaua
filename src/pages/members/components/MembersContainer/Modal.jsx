import React from "react";
import "./Modal.css";
import ReactDom from "react-dom";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function ModalTeste({ open, member }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <div className="modalCard">
      <div className="modalBg">
        <div className="modalContent">
          <h1 className="ModalMemberName">{member.name}</h1>
          <div className="Content">
            <div className="infoModal">
              <dt>
                Curso: <strong>{member.curso}</strong>
              </dt>
              <dt>
                Ano: <strong>{member.ano}</strong>
              </dt>
              <dt>
                Idade:
                <strong>
                  {Math.trunc(
                    (new Date() - new Date(member.nascimento)) / 3.154e10
                  )}
                </strong>
              </dt>
              <dt>
                Principais Tecnologias e Frameworks:
                <strong>{member.linguagens}</strong>
              </dt>
              <dt>
                Hobby: <strong>{member.hobby}</strong>
              </dt>
            </div>

            <div className="Member">
              <img
                src={member.foto.replace("open", "uc")}
                alt={`Foto de ${member.name}`}
                className="fotoModal"
              />
              <div className="socialModal">
                <a
                  className="socialMediaModal socialLinkedin"
                  href={member.linkedinLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillLinkedin />
                </a>
                <a
                  className="socialMediaModal socialGithub"
                  href={member.githubLink}
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
