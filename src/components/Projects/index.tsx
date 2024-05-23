import React from "react";
import { Background, CardProject, CircleMF, Container, Image, Title } from "./styles";
import { bucketURL } from "../../utils/enviroments";

export const Projects: React.FC = () => {
  const projects = [
    `${bucketURL}/smile.png`,
    `${bucketURL}/mf.png`,
    `${bucketURL}/eureka.png`,
    `${bucketURL}/devmedias.png`,
    `${bucketURL}/portalinterno.png`
  ]

  return <>
  <Background>
    <Title id="projects">Projetos</Title>
    <Container>
      <CardProject>
        <Image src={projects[0]} alt="smile" />
      </CardProject>
      <CardProject>
        <CircleMF>
          <Image style={{ padding: '16px 8px', paddingLeft: '8px' }} src={projects[1]} alt="mf" />
        </CircleMF>
      </CardProject>
      <CardProject>
        <Image src={projects[2]} alt="eureka" />
      </CardProject>
      <CardProject>
        <Image src={projects[3]} alt="devmedias" />
      </CardProject>
      <CardProject>
        <Image style={{ borderRadius: "50%", width: '90%', height: '90%' }} src={projects[4]} alt="portalinterno" />
      </CardProject>
    </Container>
  </Background>
  </>
}