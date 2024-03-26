import { Container, ContainerOptions, LogoFooter, Option, Options, RowSocial, Social, TextVersion } from "./styles"
import logoWhiteHeader from '../../assets/images/logo_dev_header.png'
import logoBlackHeader from '../../assets/images/logo_dev_header_light.png'
import discBlack from '../../assets/images/discBlack.png'
import discWhite from '../../assets/images/discWhite.png'
import instaBlack from '../../assets/images/instaBlack.png'
import instaWhite from '../../assets/images/instaWhite.png'
import githubBlack from '../../assets/images/githubBlack.png'
import githubWhite from '../../assets/images/githubWhite.png'
import googleBlack from '../../assets/images/googleBlack.png'
import googleWhite from '../../assets/images/googleWhite.png'
import { useContext } from "react"
import { ThemeContext } from "styled-components"

export const Footer: React.FC = () => {
  const theme = useContext(ThemeContext)

  function handleInstagram() {
    window.location.href = 'https://www.instagram.com/devcommunitymaua/'
  }
  function handleGithub() {
    window.location.href = 'https://github.com/Maua-Dev'
  }
  function handleDiscord() {
    window.location.href = 'https://discord.gg/DyfqfghRYx'
  }

  function handleScroll(id: string) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  return <Container>
    <ContainerOptions>
      <LogoFooter src={theme?.title === 'light' ? logoBlackHeader: logoWhiteHeader} alt="logo" onClick={window.location.reload} />
      <Options>
        <Option onClick={() => handleScroll('header')}>O que fazemos?</Option>
        <Option onClick={() => handleScroll('projects')}>Projetos</Option>
        <Option onClick={() => handleScroll('members')}>Membros</Option>
        <Option onClick={() => handleScroll('footer')}>Contato</Option>
      </Options>
    </ContainerOptions>
    <RowSocial id="footer">
      <Social src={theme?.title === 'light' ? googleWhite : googleBlack } alt="google" />
      <Social onClick={handleInstagram} src={theme?.title === 'light' ? instaWhite : instaBlack} alt="instagram" />
      <Social onClick={handleGithub} src={theme?.title === 'light' ? githubWhite : githubBlack} alt="google" />
      <Social onClick={handleDiscord} src={theme?.title === 'light' ? discWhite : discBlack} alt="discord" />
    </RowSocial>
    {/* <p style={}>Nosso site está sob constante mudança. Versão: 1.1.0</p> */}
    <TextVersion>Nosso site está sob constante mudança. Versão: 1.1.0</TextVersion>
  </Container>
}