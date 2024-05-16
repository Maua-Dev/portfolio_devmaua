import { FaRegMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import { ButtonIcon, ButtonNavbar, Container, Linha, Logo, SecondContainer, ThemeIcon } from "./styles";
import { ThemeContext } from "styled-components";
import { useContext } from "react";
import { HiChevronDoubleLeft } from "react-icons/hi";
import { bucketURL } from "../../utils/enviroments";

interface Props {
  toggleTheme: () => void;
}

export const Navbar: React.FC<Props> = ({ toggleTheme }) => {
  const theme = useContext(ThemeContext);

  function handleScroll(id: string) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <Container>
      <SecondContainer>

        <Logo src={`${bucketURL}/logo_dev.png`}
          alt="logo"
          onClick={() => window.location.reload}
        />
        <ButtonNavbar onClick={() => handleScroll('header')}>O que fazemos?</ButtonNavbar>
        <ButtonNavbar onClick={() => handleScroll('projects')}>Projetos</ButtonNavbar>
        <ButtonNavbar onClick={() => handleScroll('members')}>Membros</ButtonNavbar>
        <ButtonNavbar onClick={() => handleScroll('footer')}>Contato</ButtonNavbar>
        <ButtonIcon>
          <HiChevronDoubleLeft color={theme?.title === 'light'
            ? theme.fontsSizes.colors.black : theme?.fontsSizes.colors.white
          } />
        </ButtonIcon>
        <ThemeIcon onClick={toggleTheme}>
          {theme?.title === 'light' ?
            <FaRegMoon size={30} color={theme.fontsSizes.colors.white} /> :
            <MdOutlineWbSunny size={30} color={theme?.fontsSizes.colors.white} />}
        </ThemeIcon>
      </SecondContainer>
      <Linha />
    </Container>
  )
}