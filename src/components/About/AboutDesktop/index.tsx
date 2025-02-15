import { bucketURL } from '../../../utils/enviroments'
import {
  AboutImg,
  ContainerDesktop,
  Description,
  Title,
  Container,
  Card,
  CardTitle
} from '../styles'

export const AboutDesktop: React.FC = () => {
  return (
    <ContainerDesktop>
      <Title id="header">Sobre nós</Title>
      <Container>
        <Card>
          <CardTitle>Projetos internos e externos</CardTitle>
          <Description>
            Buscamos projetos com clientes reais, uma vez que são oportunidades
            para aplicar o conhecimento adquirido na universidade. Tais projetos
            envolvem desde o levantamento de requisitos, o desenvolvimento de
            soluções tecnológicas de mercado e manutenção contínua.
          </Description>
          <AboutImg src={`${bucketURL}/aboutImageLeft.png`} alt="about-img" />
        </Card>
        <Card>
          <CardTitle>Desenvolvimento de Soluções Computacionais</CardTitle>
          <Description>
            Nosso foco é o desenvolvimento de soluções computacionais orientadas
            para a experiência do usuário.
          </Description>
          <Description>
            Os participantes estão envolvidos em todo o processo de prospecção,
            criação, sempre aplicando as boas práticas de mercado.
          </Description>
          <AboutImg src={`${bucketURL}/about.png`} alt="about-img" />
        </Card>
        <Card>
          <CardTitle>Oportunidades internas em áreas diversas</CardTitle>
          <Description>
            Além dos projetos, há oportunidades internas de suporte que abrangem
            áreas como recursos humanos, comunicação e financeiro, contemplando
            todos os aspectos mercadológicos de um projeto.
          </Description>
          <AboutImg src={`${bucketURL}/aboutImageRight.png`} alt="about-img" />
        </Card>
      </Container>
    </ContainerDesktop>
  )
}

// <Title>O que fazemos?</Title>
//       <Container>
//         <ContainerSecondary>
//           <AboutImg src={`${bucketURL}/about.png`} alt="about-img" />
//         </ContainerSecondary>
//         <ContainerSecondary>
//           <Description>
//             Buscamos projetos reais com clientes, tanto externo quanto interno
//             Mauá, para que você possa aplicar seus conhecimentos. Trabalhamos
//             com gerenciamento de equipe, interações com o mercado, também
//             marketing tanto dos projetos quanto da entidade, desenvolvimento de
//             soluções computacionais sempre buscando a melhor experiência para o
//             usuário. Aqui você vai participar de todo fluxo de criação de uma
//             solução computacional que envolve todas as áreas, aplicando padrões
//             de projeto, arquitetura, experiencia do usuário, além de ensinarmos
//             o mais básico para começar um projeto. Além disso, também existem as
//             áreas internas onde você será um dos responsáveis para dar suporte e
//             manutenção da entidade, podendo escolher entre RH, comunicação e
//             financeiro.
//           </Description>
//         </ContainerSecondary>
//       </Container>
