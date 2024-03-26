import { FaRegMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import { ButtonIcon, ButtonNavbar, Container, Logo } from "./styles";
import { ThemeContext } from "styled-components";
import { useContext } from "react";
import logoWhite from '../../assets/images/logo_dev.png'
import logoBlack from '../../assets/images/logo_dev_light.png'
import { HiChevronDoubleLeft } from "react-icons/hi";

interface Props {
  toggleTheme: () => void;
}

export const Navbar: React.FC<Props> = ({ toggleTheme }) => {
  const theme = useContext(ThemeContext);

  const width = window.innerWidth > 0 ? window.innerWidth : window.screen.width;

  function handleScroll(id: string) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <Container>
      <Logo src={theme?.title === 'light' ? 
        logoWhite : logoBlack} 
        alt="logo" 
        onClick={() => window.location.reload} 
      />
      {width > 768 && <ButtonNavbar onClick={() => handleScroll('header')}>O que fazemos?</ButtonNavbar>}
      {width > 768 && <ButtonNavbar onClick={() => handleScroll('projects')}>Projetos</ButtonNavbar>}
      {width > 768 && <ButtonNavbar onClick={() => handleScroll('members')}>Membros</ButtonNavbar>}
      {width > 768 && <ButtonNavbar onClick={() => handleScroll('footer')}>Contato</ButtonNavbar>}
      {width < 768 && <ButtonIcon>
        <HiChevronDoubleLeft color={ theme?.title === 'light'
          ? theme.fontsSizes.colors.black : theme?.fontsSizes.colors.white
        }/>
      </ButtonIcon>}
      {width > 768 && <ButtonIcon onClick={toggleTheme}>
        {theme?.title === 'light' ? 
          <FaRegMoon size={30} color={theme.fontsSizes.colors.black} /> : 
          <MdOutlineWbSunny size={30} color={theme?.fontsSizes.colors.white}  />}
      </ButtonIcon>}

      
  </Container>
  )
}