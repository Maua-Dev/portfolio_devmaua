import { bucketURL } from "../../utils/enviroments";
import { Container, Description, RightContainer, Title, Portal, LeftContainer, Content, PIImgBlack, PIImgWhite } from "./styles";

export const PI : React.FC = () => {
    return(
        <Container>
            <Title>Portal Interno</Title>
            <Content>
                <LeftContainer>
                    <Description>
                        Um site feito pelos integrantes da Dev Community, que tem o objetivo de ajudar a comunidade a contabilizar suas horas dedicadas a Dev.
                    </Description>
                    <Portal>
                        Acessar PI
                    </Portal>
                </LeftContainer>
                <RightContainer>
                    <PIImgBlack src={`${bucketURL}/PIBlack.png`} alt="PortealInternoBlack"/>
                    <PIImgWhite src={`${bucketURL}/PIWhite.png`} alt="PortalInternoWhite"/>
                </RightContainer>
            </Content>
        </Container>
    );
};