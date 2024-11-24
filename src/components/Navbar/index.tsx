import { NavbarDesktop } from './NavBarDesktop'
import { NavbarMobile } from './NavBarMobile'

interface Props {
  toggleTheme: () => void
}

export const Navbar: React.FC<Props> = ({ toggleTheme }) => {
  return (
    <>
      <NavbarDesktop toggleTheme={toggleTheme} />
      <NavbarMobile toggleTheme={toggleTheme} />
    </>
  )
}
