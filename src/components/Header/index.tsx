import React, { useContext, useEffect, useState } from "react";
import {
  Container,
  ContainerSecondary,
  Description,
  HeaderImg,
  LogoHeader,
  SelectiveProcessBtn,
} from "./styles";
import { ThemeContext } from "styled-components";
import { bucketURL } from "../../utils/enviroments";

export const Header: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  });

  const theme = useContext(ThemeContext);
  return !isMobile ? (
    <Container>
      <ContainerSecondary>
        <LogoHeader
          src={
            theme?.title === "light"
              ? `${bucketURL}/logo_dev_header.png`
              : `${bucketURL}/logo_dev_header_light.png`
          }
          alt="logo"
          onClick={window.location.reload}
        />
        <Description>
          O Dev. Community Mauá, fundado em 2021, é uma extracurricular do
          Instituto Mauá de Tecnologia e tem por objetivo o desenvolvimento e
          criação de soluções computacionais. Voltado aos alunos que gostam de
          desafios e buscando sempre trazer um contato mais eficaz com a áreas
          de computação, estamos aqui para incorporar, principalmente, o
          trabalho em equipe e as práticas do mercado com o mundo da tecnologia
          e inovação.{" "}
        </Description>
        <SelectiveProcessBtn id="header">Processo Seletivo</SelectiveProcessBtn>
      </ContainerSecondary>
      <ContainerSecondary>
        <HeaderImg src={`${bucketURL}/header.png`} alt="header-img" />
      </ContainerSecondary>
    </Container>
  ) : (
    <Container>
      <LogoHeader
        src={
          theme?.title === "light"
            ? `${bucketURL}/logo_dev_header.png`
            : `${bucketURL}/logo_dev_header_light.png`
        }
        alt="logo"
        onClick={window.location.reload}
      />
      <ContainerSecondary>
      <Description>
          O Dev. Community Mauá, fundado em 2021, é uma extracurricular do
          Instituto Mauá de Tecnologia e tem por objetivo o desenvolvimento e
          criação de soluções computacionais. Voltado aos alunos que gostam de
          desafios e buscando sempre trazer um contato mais eficaz com a áreas
          de computação, estamos aqui para incorporar, principalmente, o
          trabalho em equipe e as práticas do mercado com o mundo da tecnologia
          e inovação.{" "}
        </Description>
        <HeaderImg src={`${bucketURL}/header.png`} alt="header-img" />
      </ContainerSecondary>
    </Container>
  );
};
