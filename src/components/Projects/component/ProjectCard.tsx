import React, { useEffect, useRef } from "react";
import { Container, Data, Description, LeftContainer, Overlay, ProjectImage, ProjectImageFood, ProjectName, RightContainer, Technologies } from "./styles";
import { Project } from ".."

interface ProjectCardProps {
  project: Project,
  setProject: (project: Project | null) => void
}

export const ProjectCard: React.FC <ProjectCardProps> = ({project, setProject}) => {
  const [fade, setFade] = React.useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const renderProjectImage = () => {
    if (project.title === "MAUÁ FOOD") {
      return (
        <ProjectImageFood src={project.image} alt="Project Image" />
      );
    }
    return <ProjectImage src={project.image} alt="Project Image" />;
  };

  useEffect(() => {
    setFade(true);
  }, []);
  
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setFade(false);
        setTimeout(() => {
          setProject(null);
        }, 400);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };


  }, [setProject]);
  
  return (
    <Overlay fade={fade}>
      <Container ref={ref} fade={fade}>
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
          <Description>
            {project.description}
          </Description>
        </LeftContainer>
        <RightContainer>
          {renderProjectImage()}
        </RightContainer>
      </Container>
    </Overlay>
  )
}
