import React from "react";
import ModalProject from "./ModalProject";
import { useState } from "react";

export default function ProjectCard(props) {
  const [modaCardlOpen, setModalCardOpen] = useState(false); // Abre o modal
  function setModal(e) {
    // console.log(e.target);
    if (
      e.target.className === "project-card" ||
      e.target.className === "modalBg"
    ) {
      setModalCardOpen(!modaCardlOpen);
    }
  }

  return (
    <div className="project-card" onClickCapture={(e) => setModal(e)}>
      {props.project.name}
      <ModalProject open={modaCardlOpen} project={props.project} />
    </div>
  );
}
