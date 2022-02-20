import React from "react";
import { useState } from "react";
import ModalProjects from "./ModalProjects";

export default function ProjectCard(props) {
  const [modaCardlOpen, setModalCardOpen] = useState(false); // Abre o modal

  function setModal(e) {
    if (
      e.target.className === "project-card" ||
      e.target.className === "modalBg" ||
      e.target.className === "xisHitBox" || // Xis para fechar o modal
      e.target.tagName === "svg" || // Xis para fechar o modal
      e.target.tagName === "path" // Xis para fechar o modal
    ) {
      setModalCardOpen(!modaCardlOpen);
    }
  }

  return (
    <div className="project-card" onClickCapture={(e) => setModal(e)}>
      {props.project.name}
      <ModalProjects open={modaCardlOpen} project={props.project} />
    </div>
  );
}
