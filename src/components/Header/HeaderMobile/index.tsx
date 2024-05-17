import { useContext } from "react";
import {
  ContainerMobile,
  ContainerSecondary,
  ContainerTertiary,
  Description,
  HeaderImg,
  LogoHeader,
  SelectiveProcessBtn,
} from "../styles";
import { ThemeContext } from "styled-components";
import { bucketURL } from "../../../utils/enviroments";

export const HeaderMobile: React.FC = () => {
  const theme = useContext(ThemeContext);

  return (
    <ContainerMobile>
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
        <ContainerSecondary>
          <Description>
            O Dev. Community Mauá, fundado em 2021, é uma extracurricular do
            Instituto Mauá de Tecnologia e tem por objetivo o desenvolvimento e
            criação de soluções computacionais. Voltado aos alunos que gostam de
            desafios e buscando sempre trazer um contato mais eficaz com a áreas
            de computação, estamos aqui para incorporar, principalmente, o
            trabalho em equipe e as práticas do mercado com o mundo da
            tecnologia e inovação.{" "}
          </Description>
        </ContainerSecondary>
        <ContainerTertiary>
          <HeaderImg src={`${bucketURL}/header.png`} alt="header-img" />
          <SelectiveProcessBtn id="header">
            Processo Seletivo
          </SelectiveProcessBtn>
        </ContainerTertiary>
      </ContainerSecondary>
    </ContainerMobile>
  );
};
