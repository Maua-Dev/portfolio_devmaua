import { bucketURL } from '../../../utils/enviroments'
import {
  AboutImg,
  Container,
  ContainerMobile,
  Description,
  Title,
  Card,
  CardTitle,
  ContainerSecondary
} from '../styles'

export const AboutMobile: React.FC = () => {
  return (
    <ContainerMobile>
      <Title id="headerMobile">Sobre nós</Title>
      <Container>
        <ContainerSecondary>
          <Card>
            <CardTitle>Projetos internos e externos</CardTitle>
            <Description>
              Buscamos projetos com clientes reais, uma vez que são
              oportunidades para aplicar o conhecimento adquirido na
              universidade. Tais projetos envolvem desde o levantamento de
              requisitos, o desenvolvimento de soluções tecnológicas de mercado
              e manutenção contínua.
            </Description>
          </Card>
          <AboutImg src={`${bucketURL}/aboutImageLeft.png`} alt="about-img" />
        </ContainerSecondary>
        <ContainerSecondary style={{ justifyContent: 'end' }}>
          <Card>
            <CardTitle>Desenvolvimento de Soluções Computacionais</CardTitle>
            <Description>
              Nosso foco é o desenvolvimento de soluções computacionais
              orientadas para a experiência do usuário.
            </Description>
            <Description>
              Os participantes estão envolvidos em todo o processo de
              prospecção, criação, sempre aplicando as boas práticas de mercado.
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
            <CardTitle>Oportunidades internas em áreas diversas</CardTitle>
            <Description>
              Além dos projetos, há oportunidades internas de suporte que
              abrangem áreas como recursos humanos, comunicação e financeiro,
              contemplando todos os aspectos mercadológicos de um projeto.
            </Description>
          </Card>
          <AboutImg src={`${bucketURL}/aboutImageRight.png`} alt="about-img" />
        </ContainerSecondary>
      </Container>
    </ContainerMobile>
  )
}
