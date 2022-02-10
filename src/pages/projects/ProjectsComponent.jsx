import React from "react";
import ProjectCard from "./components/ProjectCard";
import "./Projects.css";
import projects from "./projects.js";

export default function ProjectsComponent() {
  return (
    <div className="ProjectsComponent pages" id="projetos">
      <h1 className="titulo">Projetos</h1>
      <div className="list-members">
        {projects.projects.map((project, i) => (
          <ProjectCard project={project} key={i} />
        ))}
      </div>
    </div>
  );
}
