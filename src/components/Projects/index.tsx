import React from "react";
import { CardProject, CircleMF, Container, Image, Title } from "./styles";
import smileImg from '../../assets/images/smile.png'
import mfImg from '../../assets/images/mf.png'
import eurekaImg from '../../assets/images/eureka.png'
import devMediasImg from '../../assets/images/devmedias.png'
import portalInternoimg from '../../assets/images/portalinterno.png'

export const Projects: React.FC = () => {
  const projects = [
    smileImg,
    mfImg,
    eurekaImg,
    devMediasImg,
    portalInternoimg
  ]

  return <>
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
        <CircleMF style={{ backgroundColor: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Image style={{ borderRadius: "50%", width: '90%', height: '90%' }} src={projects[4]} alt="portalinterno" />

        </CircleMF>
      </CardProject>
    </Container>
  
  </>
}