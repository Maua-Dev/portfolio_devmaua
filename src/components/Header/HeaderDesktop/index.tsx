import { useContext } from "react";
import {
  ContainerDestkop,
  ContainerSecondary,
  Description,
  HeaderImg,
  LogoHeader
} from "../styles";
import { ThemeContext } from "styled-components";
import { bucketURL } from "../../../utils/enviroments";

export const HeaderDesktop: React.FC = () => {
  const theme = useContext(ThemeContext);

  return (
    <ContainerDestkop>
      <ContainerSecondary>
        <LogoHeader
          src={
            theme?.title === "light"
              ? `${bucketURL}/logo_dev_header.png`
              : `${bucketURL}/logo_dev_header_light.png`
          }
          alt="logo"
          onClick={window.location.reload}
        />
        <Description>
          O Dev. Community Mauá, criado em 2021, promove o desenvolvimento de
          soluções computacionais no Instituto Mauá de Tecnologia. Focado em
          desafios, busca integrar trabalho em equipe e práticas de mercado com
          tecnologia e inovação.
        </Description>
        {/* <SelectiveProcessBtn>Processo Seletivo</SelectiveProcessBtn> */}
      </ContainerSecondary>
      <ContainerSecondary>
        <HeaderImg src={`${bucketURL}/headerImage.png`} alt="header-img" />
      </ContainerSecondary>
    </ContainerDestkop>
  );
};
