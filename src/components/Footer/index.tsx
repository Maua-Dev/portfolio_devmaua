import {
  Container,
  ContainerOptions,
  ContentContainer,
  LateralImgFooterLeft,
  LateralImgFooterRight,
  LogoFooter,
  Option,
  Options,
  RowSocial,
  Social,
  TextVersion,
} from "./styles";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { bucketURL } from "../../utils/enviroments";

export const Footer: React.FC = () => {
  const theme = useContext(ThemeContext);

  function handleInstagram() {
    window.open("https://www.instagram.com/devcommunitymaua/", "_blank");
  }
  function handleGithub() {
    window.open("https://github.com/Maua-Dev", "_blank");
  }
  function handleDiscord() {
    window.open("https://discord.gg/DyfqfghRYx", "_blank");
  }

  function handleScroll(id: string) {
    const section = document.getElementById(id);
    console.log(section)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <Container>
      <LateralImgFooterLeft
        src={`${bucketURL}/footerLateralE.png`}
      ></LateralImgFooterLeft>
      <ContentContainer>
        <ContainerOptions>
          <LogoFooter
            src={theme?.title === "light" ? `${bucketURL}/logo_dev_header_light.png` : `${bucketURL}/logo_dev_header.png`}
            alt="logo"
            onClick={window.location.reload}
          />
          <Options>
            <Option onClick={() => handleScroll(
              innerWidth > 768 ? "header" :
                "headerMobile")}>
              Sobre nós
            </Option>
            <Option onClick={() => handleScroll("projects")}>Projetos</Option>
            <Option onClick={() => handleScroll("portalInterno")}>Portal Interno</Option>
            <Option onClick={() => handleScroll("members")}>Membros</Option>
            <Option onClick={() => handleScroll("footer")}>Contato</Option>
          </Options>
        </ContainerOptions>
        <RowSocial id="footer">
          <Social
            onClick={handleInstagram}
            src={theme?.title === "light" ? `${bucketURL}/instaWhite.png` : `${bucketURL}/instaBlack.png`}
            alt="instagram"
          />
          <Social
            onClick={handleGithub}
            src={theme?.title === "light" ? `${bucketURL}/githubWhite.png` : `${bucketURL}/githubBlack.png`}
            alt="google"
          />
          <Social
            onClick={handleDiscord}
            src={theme?.title === "light" ? `${bucketURL}/discWhite.png` : `${bucketURL}/discBlack.png`}
            alt="discord"
          />
        </RowSocial>
        {/* <p style={}>Nosso site está sob constante mudança. Versão: 1.1.0</p> */}
        <TextVersion>
          Nosso site está sob constante mudança. Versão: 2.0.0
        </TextVersion>
      </ContentContainer>
      <LateralImgFooterRight
        src={`${bucketURL}/footerLateralD.png`}
      ></LateralImgFooterRight>
    </Container>
  );
};
