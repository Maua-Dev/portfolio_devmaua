import React from "react";
import { useState } from "react";
import ModalTeste from "./ModalProjects"

export default function ProjectCard(props) {
    const [modaCardlOpen, setModalCardOpen] = useState(false); // Abre o modal

    function setModal(e) {

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
            <ModalTeste open={modaCardlOpen} project={props.project} />
        </div>
    )
}