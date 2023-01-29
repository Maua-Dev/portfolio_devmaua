import React from "react";
import "./ModalProjects.css";
import ReactDom from "react-dom";
import { AiFillGithub } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import MemberModalProject from "./MemberModalProject";

export default function ModalProjects({ open, project }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <div className="modalCard">
      <div className="modalBg">
        <div className="modalContentProjects">
          <div className="modalHeaderName">
            {/*Xis para fechar o modal */}
            <div className="xisHitBox">
              <IoClose className="ioClose" />
            </div>
            {/*  */}
            <h1 className="ModalProjectName">{project.name}</h1>
            {project.link != "" ? (
              <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="githubModal"
            >
              <AiFillGithub />
            </a>
            ) : null}
          </div>
          <div className="ColetaneaProjects">
            <div className="infoModalProjects">
              <h2 className="tecnologias">Tecnologias:</h2>
              <dt>
                Frontend: <strong>{project.frontend}</strong>
              </dt>
              <dt>
                Backend: <strong> {project.backend} </strong>
              </dt>
            </div>
            <div className="FotoProjects">
              <img
                src={project.foto}
                alt={project.name}
                className="fotoModalProjects"
              />
            </div>
          </div>
          <div className="contribuidores">
            <h2>Contribuidores:</h2>
            <div className="membrosParticipantesContainer">
              {project.membros.map((membro) => {
                return <MemberModalProject key={membro.name} membro={membro} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}
