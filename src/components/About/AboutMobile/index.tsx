import { bucketURL } from "../../../utils/enviroments";
import {
  AboutImg,
  Container,
  ContainerMobile,
  Description,
  Title,
  Card,
  CardTitle,
  ContainerSecondary,
} from "../styles";

export const AboutMobile: React.FC = () => {
  return (
    <ContainerMobile>
      <Title>O que fazemos?</Title>
      <Container>
        <ContainerSecondary>
          <Card>
            <CardTitle>Projetos com Clientes Internos e Externos</CardTitle>
            <Description>
              Buscamos projetos reais envolvendo clientes internos e externos.
              Esses projetos são oportunidades para aplicar conhecimentos
              adquiridos. As atividades incluem gerenciamento de equipe e
              interações de mercado.
            </Description>
          </Card>
          <AboutImg src={`${bucketURL}/aboutImageLeft.png`} alt="about-img" />
        </ContainerSecondary>
        <ContainerSecondary style={{ justifyContent: "end" }}>
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
          </Card>
          <AboutImg
            src={`${bucketURL}/about.png`}
            alt="about-img"
            style={{ left: 0 }}
          />
        </ContainerSecondary>
        <ContainerSecondary>
          <Card>
            <CardTitle>
              Oportunidades Internas de Suporte e Manutenção:
            </CardTitle>
            <Description>
              Além dos projetos, há oportunidades internas de suporte que
              abrangem áreas como recursos humanos, comunicação e financeiro. Os
              participantes podem se envolver em suporte e manutenção nessas
              áreas, recebendo orientações básicas conforme necessário.
            </Description>
          </Card>
          <AboutImg src={`${bucketURL}/aboutImageRight.png`} alt="about-img" />
        </ContainerSecondary>
      </Container>
    </ContainerMobile>
  );
};
