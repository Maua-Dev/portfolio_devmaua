import { ButtonNavbar, Container, Logo } from "./styles";

export function Navbar() {
  return <Container>
    <Logo src="https://i.imgur.com/9nNwPiN.png" alt="logo" onClick={window.location.reload} />
    <ButtonNavbar>O que fazemos?</ButtonNavbar>
    <ButtonNavbar>Projetos</ButtonNavbar>
    <ButtonNavbar>Membros</ButtonNavbar>
    <ButtonNavbar>Contato</ButtonNavbar>
  </Container>
}