import React, { useContext } from "react";
import { Container, Data, LeftContainer, ProjectImage, ProjectImageFood, ProjectName, RightContainer, Social, Technologies } from "./styles";
import { Project } from ".."
import { ThemeContext } from "styled-components";
import { bucketURL } from "../../../utils/enviroments";

interface ProjectCardProps {project: Project}

export const ProjectCard: React.FC <ProjectCardProps> = ({project}) => {
  const theme = useContext(ThemeContext);

  const renderProjectImage = () => {
    if (project.title === "MAUÁ FOOD") {
      return (
        <ProjectImageFood src={project.image} alt="Project Image" />
      );
    }
    return <ProjectImage src={project.image} alt="Project Image" />;
  };

  function handleGithub() {
    window.location.href = "https://github.com/Maua-Dev";
  }
  
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
