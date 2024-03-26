import React, { useContext } from "react";
import { Container, ContainerSecondary, Description, HeaderImg, LogoHeader, SelectiveProcessBtn } from "./styles";
import { ThemeContext } from "styled-components";
import logoWhiteHeader from '../../assets/images/logo_dev_header.png'
import logoBlackHeader from '../../assets/images/logo_dev_header_light.png'
import headerImg from '../../assets/images/header.png'

export const Header: React.FC = () => {
  const theme = useContext(ThemeContext)
  return <Container>
    <ContainerSecondary>
      <LogoHeader src={theme?.title === 'light' ? logoWhiteHeader : logoBlackHeader} alt="logo" onClick={window.location.reload} />
      <Description>
      O Dev. Community Mauá, fundado em 2021, é uma extracurricular do Instituto Mauá de Tecnologia e tem por objetivo o desenvolvimento e criação de soluções computacionais. Voltado aos alunos que gostam de desafios e buscando sempre trazer um contato mais eficaz com a áreas de computação, estamos aqui para incorporar, principalmente, o trabalho em equipe e as práticas do mercado com o mundo da tecnologia e inovação.
      </Description>
      <SelectiveProcessBtn id="header">Processo Seletivo</SelectiveProcessBtn>
    </ContainerSecondary>
    <ContainerSecondary>
      <HeaderImg src={headerImg} alt="header-img" />
    </ContainerSecondary>
  </Container>
}