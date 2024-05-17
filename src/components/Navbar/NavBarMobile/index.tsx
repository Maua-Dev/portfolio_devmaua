import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { ButtonIcon, Container, Logo } from "./styles";
import { HiOutlineViewList } from "react-icons/hi";
import { bucketURL } from "../../../utils/enviroments";

interface Props {
    toggleTheme: () => void;
  }
  
  export const NavbarMobile: React.FC<Props> = ({ toggleTheme }) => {
    const theme = useContext(ThemeContext);
  
    // function handleScroll(id: string) {
    //   const section = document.getElementById(id);
    //   if (section) {
    //     section.scrollIntoView({ behavior: 'smooth' });
    //   }
    // }
  
    return (
      <Container>
        <Logo src={`${bucketURL}/logo_dev.png`}
          alt="logo"
          onClick={() => window.location.reload}
        />
        <ButtonIcon>
          <HiOutlineViewList  color={theme?.title === 'light'
            ? theme.fontsSizes.colors.black : theme?.fontsSizes.colors.white
          } />
        </ButtonIcon>
      </Container>
    )
  }