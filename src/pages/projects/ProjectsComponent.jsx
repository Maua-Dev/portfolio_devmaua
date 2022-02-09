import React from "react";
import ProjectCard from "./components/ProjectCard";
import projectsJson from './projects.json'
import "./Projects.css";

export default function ProjectsComponent() {
  return (
      <div className="ProjectsComponent pages" id="projetos">
        <h1 className="titulo">Projetos</h1>
        <div className="list-members">
          {projectsJson.projects.map((project) => <ProjectCard name={project.name}/>)}
        </div>
      </div>
  );
}
