import { useContext } from 'react'
import {
  ContainerMobile,
  ContainerSecondary,
  ContainerTertiary,
  Description,
  HeaderImg,
  LogoHeader
} from '../styles'
import { ThemeContext } from 'styled-components'
import { bucketURL } from '../../../utils/enviroments'

export const HeaderMobile: React.FC = () => {
  const theme = useContext(ThemeContext)

  return (
    <ContainerMobile>
      <LogoHeader
        src={
          theme?.title === 'light'
            ? `${bucketURL}/logo_dev_header.png`
            : `${bucketURL}/logo_dev_header_light.png`
        }
        alt="logo"
        onClick={window.location.reload}
      />
      <ContainerSecondary>
        <ContainerSecondary>
          <Description>
            A Dev. Community Mauá, criada em 2021, promove o desenvolvimento de
            soluções computacionais no Instituto Mauá de Tecnologia. Focada em
            desafios, busca integrar trabalho em equipe e práticas de mercado
            com tecnologia e inovação.
          </Description>
        </ContainerSecondary>
        <ContainerTertiary>
          <HeaderImg
            src={`${bucketURL}/fotos_membros_20241.jpeg`}
            alt="header-img"
          />
          {/* <SelectiveProcessBtn>Processo Seletivo</SelectiveProcessBtn> */}
        </ContainerTertiary>
      </ContainerSecondary>
    </ContainerMobile>
  )
}
