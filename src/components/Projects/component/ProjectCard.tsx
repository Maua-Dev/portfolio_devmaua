import React, { useEffect, useRef } from "react";
import { Container, Data, LeftContainer, ProjectImage, ProjectImageFood, ProjectName, RightContainer, Technologies, Overlay } from "./styles";
import { Project } from ".."

interface ProjectCardProps {
  project: Project,
  setProject: (project: Project | null) => void
}

export const ProjectCard: React.FC <ProjectCardProps> = ({project, setProject}) => {

  const renderProjectImage = () => {
    if (project.title === "MAUÁ FOOD") {
      return (
        <ProjectImageFood src={project.image} alt="Project Image" />
      );
    }
    return <ProjectImage src={project.image} alt="Project Image" />;
  };

  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setProject(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setProject]);
  
  return (
    <Overlay>
    <Container ref={ref}>
      <LeftContainer>
        <ProjectName>
          {project.title}
        </ProjectName>
        <Technologies>
          Tecnologias:
        </Technologies>
        <Data>
          Frontend: {project.frontend}
        </Data>
        <Data>
          Backend: {project.backend}
        </Data>
      </LeftContainer>
      <RightContainer>
        {renderProjectImage()}
      </RightContainer>
    </Container>
    </Overlay>
  )
}
