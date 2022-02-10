import React from "react";
import "./ModalProject.css";
import ReactDom from "react-dom";
import { AiFillGithub } from "react-icons/ai";

export default function ModalTeste({ open, project }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <div className="modalCard">
      <div className="modalBg">
        <div className="modalContentProjects">
          <div className="modalHeaderName">
            <h1 className="ModalProjectName">{project.name}</h1>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="githubModal"
            >
              <AiFillGithub />
            </a>
          </div>
          <div className="ContentProjectModal">
            <div className="infoModalProjects">
              <h1 className="tecnologias">Tecnologias</h1>
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
            <h1>Contribuidores: </h1>
            <div className="membrosParticipantesContainer">
              {project.membros.map((membro, i) => {
                return (
                  <div className="membroParticipante">
                    <a
                      href={membro.githubLink}
                      className="membroParticipanteLink"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        key={i}
                        src={membro.foto.replace("open", "uc")}
                        alt={membro.name}
                        className="membroParticipanteFoto"
                      />
                    </a>
                    <span class="tooltiptext">{membro.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}
