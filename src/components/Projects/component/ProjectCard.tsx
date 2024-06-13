import React from "react";
import { Container, Data, LeftContainer, ProjectImage, ProjectImageFood, ProjectName, RightContainer, Technologies } from "./styles";
import { Project } from ".."
import { CircleMF } from "../styles";

interface ProjectCardProps {project: Project}

export const ProjectCard: React.FC <ProjectCardProps> = ({project}) => {
  const renderProjectImage = () => {
    if (project.title === "MAUÁ FOOD") {
      return (
        <ProjectImageFood src={project.image} alt="Project Image" />
      );
    }
    return <ProjectImage src={project.image} alt="Project Image" />;
  };
  
  return (
    <Container>
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
  )
}
