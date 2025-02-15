import { useContext } from 'react'
import { bucketURL } from '../../utils/enviroments'
import {
  Container,
  Description,
  RightContainer,
  Title,
  Portal,
  LeftContainer,
  Content,
  PIImgBlack,
  PIImgWhite
} from './styles'
import { ThemeContext } from 'styled-components'

export const PI: React.FC = () => {
  const theme = useContext(ThemeContext)

  const handlePortalInterno = () => {
    window.open('https://onlydevs.devmaua.com/login', '_blank')
  }

  return (
    <Container>
      <Title id="portalInterno">Portal Interno</Title>
      <Content>
        <LeftContainer>
          <Description>
            Um site feito pelos integrantes da Dev Community, que tem o objetivo
            de ajudar a comunidade a contabilizar suas horas dedicadas a Dev.
          </Description>
          <Portal onClick={handlePortalInterno}>Acessar PI</Portal>
        </LeftContainer>
        <RightContainer>
          <PIImgBlack
            src={
              theme?.title === 'light'
                ? `${bucketURL}/PIBlack.png`
                : `${bucketURL}/PIWhite.png`
            }
            alt="PortealInternoBlack"
          />
          <PIImgWhite
            src={
              theme?.title === 'light'
                ? `${bucketURL}/PIWhite.png`
                : `${bucketURL}/PIBlack.png`
            }
            alt="PortalInternoWhite"
          />
        </RightContainer>
      </Content>
    </Container>
  )
}
