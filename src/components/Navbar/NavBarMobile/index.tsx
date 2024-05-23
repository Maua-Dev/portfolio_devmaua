import { useContext, useState } from "react";
import { ThemeContext } from "styled-components";
import {
  ButtonIcon,
  Container,
  Logo,
  MenuItems,
  NavMenu,
  MenuHeader,
  Item,
  Icon,
  MenuLogo,
  RowSocial,
  Social,
  TextVersion,
  MenuFooter
} from "./styles";
import { HiOutlineViewList } from "react-icons/hi";
import { bucketURL } from "../../../utils/enviroments";
import { MenuData } from "./assets/MenuData";
import { IoMdClose } from "react-icons/io";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

interface Props {
  toggleTheme: () => void;
}

export const NavbarMobile: React.FC<Props> = ({ toggleTheme }) => {
  const theme = useContext(ThemeContext);
  const [sidebarVisibility, setSidebarVisibility] = useState<boolean>(false);

  const handleSidebarVisibility = () => {
    setSidebarVisibility(!sidebarVisibility);
  };

  function handleInstagram() {
    window.location.href = "https://www.instagram.com/devcommunitymaua/";
  }
  function handleGithub() {
    window.location.href = "https://github.com/Maua-Dev";
  }
  function handleDiscord() {
    window.location.href = "https://discord.gg/DyfqfghRYx";
  }

  function handleScroll(id: string) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
      <Container>
        <Logo
          src={`${bucketURL}/logo_dev.png`}
          alt="logo"
          onClick={() => window.location.reload}
        />
        <ButtonIcon onClick={handleSidebarVisibility}>
          <HiOutlineViewList
          />
        </ButtonIcon>
      </Container>
      {sidebarVisibility ? (
        <NavMenu>
          <MenuHeader>
            <MenuLogo
              src={
                theme?.title === "light"
                  ? `${bucketURL}/logo_dev_header.png`
                  : `${bucketURL}/logo_dev_header_light.png`
              }
              alt="logo"
            ></MenuLogo>
            <Icon style={{ marginRight: 0 }}>
              <IoMdClose onClick={handleSidebarVisibility} />
            </Icon>
          </MenuHeader>
          <MenuItems onClick={handleSidebarVisibility}>
            {MenuData.map((item, index) => {
              return (
                <Item key={index} onClick={() => handleScroll(item.path)}>
                  <Icon>{item.icon}</Icon>
                  <span>{item.title}</span>
                </Item>
              );
            })}
            <Item onClick={toggleTheme}>
              <Icon>
                {theme?.title === "light" ? (
                  <MdSunny />
                ) : (
                  <FaMoon />
                )}
              </Icon>
              <span>
                {theme?.title === "light" ? "Modo Light" : "Modo Dark"}
              </span>
            </Item>
          </MenuItems>
          <MenuFooter>
            <RowSocial>
              <Social
                src={
                  theme?.title === "light"
                    ? `${bucketURL}/googleBlack.png`
                    : `${bucketURL}/googleWhite.png`
                }
                alt="google"
              />
              <Social
                onClick={handleInstagram}
                src={
                  theme?.title === "light"
                    ? `${bucketURL}/instaBlack.png`
                    : `${bucketURL}/instaWhite.png`
                }
                alt="instagram"
              />
              <Social
                onClick={handleGithub}
                src={
                  theme?.title === "light"
                    ? `${bucketURL}/githubBlack.png`
                    : `${bucketURL}/githubWhite.png`
                }
                alt="google"
              />
              <Social
                onClick={handleDiscord}
                src={
                  theme?.title === "light"
                    ? `${bucketURL}/discBlack.png`
                    : `${bucketURL}/discWhite.png`
                }
                alt="discord"
              />
            </RowSocial>
            <TextVersion>
              Nosso site está sob constante mudança. Versão: 2.0.0
            </TextVersion>
          </MenuFooter>
        </NavMenu>
      ) : null}
    </>
  );
};
