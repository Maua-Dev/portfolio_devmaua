import { AboutImg, Container, ContainerSecondary, Description, Title } from "./styles"
import aboutImg from '../../assets/images/about.png'

export const About: React.FC = () => {
  return <>
    <Title>O que fazemos?</Title>
    <Container>
      <ContainerSecondary>
        <AboutImg src={aboutImg} alt="about-img" />
      </ContainerSecondary>
      <ContainerSecondary>
        <Description>
        Buscamos projetos reais com clientes, tanto externo quanto interno Mauá, para que você possa aplicar seus conhecimentos. Trabalhamos com gerenciamento de equipe, interações com o mercado, também marketing tanto dos projetos quanto da entidade, desenvolvimento de soluções computacionais sempre buscando a melhor experiência para o usuário. Aqui você vai participar de todo fluxo de criação de uma solução computacional que envolve todas as áreas, aplicando padrões de projeto, arquitetura, experiencia do usuário, além de ensinarmos o mais básico para começar um projeto. Além disso, também existem as áreas internas onde você será um dos responsáveis para dar suporte e manutenção da entidade, podendo escolher entre RH, comunicação e financeiro.
        </Description>
      </ContainerSecondary>
    </Container>
  </>
}