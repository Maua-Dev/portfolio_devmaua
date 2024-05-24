import { bucketURL } from "../../../utils/enviroments";
import {
  AboutImg,
  ContainerDesktop,
  Description,
  Title,
  Container,
  Card,
  CardTitle,
} from "../styles";

export const AboutDesktop: React.FC = () => {
  return (
    <ContainerDesktop>
      <Title id="header">Sobre nós</Title>
      <Container>
        <Card>
          <CardTitle>Projetos com Clientes Internos e Externos</CardTitle>
          <Description>
            Buscamos projetos reais envolvendo clientes internos e externos.
            Esses projetos são oportunidades para aplicar conhecimentos
            adquiridos. As atividades incluem gerenciamento de equipe e
            interações de mercado.
          </Description>
          <AboutImg src={`${bucketURL}/aboutImageLeft.png`} alt="about-img" />
        </Card>
        <Card>
          <CardTitle>Desenvolvimento de Soluções Computacionais:</CardTitle>
          <Description>
            Nosso foco é no desenvolvimento de soluções computacionais e essas
            soluções são orientadas para a experiência do usuário.
          </Description>
          <Description>
            Os participantes estarão envolvidos em todo o processo de criação,
            aplicando padrões de projeto.
          </Description>
          <AboutImg src={`${bucketURL}/about.png`} alt="about-img" />
        </Card>
        <Card>
          <CardTitle>Oportunidades Internas de Suporte e Manutenção:</CardTitle>
          <Description>
            Além dos projetos, há oportunidades internas de suporte que abrangem
            áreas como recursos humanos, comunicação e financeiro. Os
            participantes podem se envolver em suporte e manutenção nessas
            áreas, recebendo orientações básicas conforme necessário.
          </Description>
          <AboutImg src={`${bucketURL}/aboutImageRight.png`} alt="about-img" />
        </Card>
      </Container>
    </ContainerDesktop>
  );
};

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
