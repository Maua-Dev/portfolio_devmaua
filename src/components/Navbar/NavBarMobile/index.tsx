import { useContext, useState } from 'react'
import { ThemeContext } from 'styled-components'
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
  MenuFooter,
  Overlay,
  SocialBackground
} from './styles'
import { HiOutlineViewList } from 'react-icons/hi'
import { bucketURL } from '../../../utils/enviroments'
import { MenuData } from './assets/MenuData'
import { IoMdClose } from 'react-icons/io'
import { MdSunny } from 'react-icons/md'
import { FaMoon } from 'react-icons/fa'

interface Props {
  toggleTheme: () => void
}

export const NavbarMobile: React.FC<Props> = ({ toggleTheme }) => {
  const theme = useContext(ThemeContext)
  const [fade, setFade] = useState<boolean>(false)
  const [sidebarVisibility, setSidebarVisibility] = useState<boolean>(false)

  const handleSidebarVisibility = () => {
    if (sidebarVisibility) {
      setFade(false)
      setTimeout(() => {
        setSidebarVisibility(false)
      }, 500)
    } else {
      setSidebarVisibility(true)
      setTimeout(() => {
        setFade(true)
      }, 10)
    }
  }

  function handleInstagram() {
    window.open('https://www.instagram.com/devcommunitymaua/', '_blank')
  }
  function handleGithub() {
    window.open('https://github.com/Maua-Dev', '_blank')
  }
  function handleDiscord() {
    window.open('https://discord.gg/DyfqfghRYx', '_blank')
  }

  function handleScroll(id: string) {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
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
          <HiOutlineViewList />
        </ButtonIcon>
      </Container>
      {sidebarVisibility ? (
        <>
          <Overlay fade={fade} onClick={handleSidebarVisibility} />
          <NavMenu fade={fade}>
            <MenuHeader>
              <MenuLogo
                src={
                  theme?.title === 'light'
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
                  <Item
                    key={index}
                    onClick={() => handleScroll(item.path)}
                    fade={fade}
                    delay={index * 100}
                  >
                    <Icon>{item.icon}</Icon>
                    <span>{item.title}</span>
                  </Item>
                )
              })}
              <Item onClick={toggleTheme} fade={fade} delay={500}>
                <Icon>
                  {theme?.title === 'light' ? <MdSunny /> : <FaMoon />}
                </Icon>
                <span>
                  {theme?.title === 'light' ? 'Modo Light' : 'Modo Dark'}
                </span>
              </Item>
            </MenuItems>
            <MenuFooter>
              <RowSocial>
                <SocialBackground>
                  <Social
                    onClick={handleInstagram}
                    src={
                      theme?.title === 'light'
                        ? `${bucketURL}/instaBlack.png`
                        : `${bucketURL}/instaWhite.png`
                    }
                    alt="instagram"
                  />
                </SocialBackground>
                <SocialBackground>
                  <Social
                    onClick={handleGithub}
                    src={
                      theme?.title === 'light'
                        ? `${bucketURL}/githubBlack.png`
                        : `${bucketURL}/githubWhite.png`
                    }
                    alt="google"
                  />
                </SocialBackground>
                <SocialBackground>
                  <Social
                    onClick={handleDiscord}
                    src={
                      theme?.title === 'light'
                        ? `${bucketURL}/discBlack.png`
                        : `${bucketURL}/discWhite.png`
                    }
                    alt="discord"
                  />
                </SocialBackground>
              </RowSocial>
              <TextVersion>
                Nosso site está sob constante mudança. Versão: 2.0.0
              </TextVersion>
              <TextVersion style={{ marginTop: '1%' }}>
                Praça Mauá, 1 - Mauá, São Caetano do Sul - SP, 09580-900
              </TextVersion>
              <TextVersion style={{ marginTop: '1%' }}>dev@maua.br</TextVersion>
            </MenuFooter>
          </NavMenu>
        </>
      ) : null}
    </>
  )
}
