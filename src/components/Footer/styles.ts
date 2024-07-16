import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
  padding: 0 8%;
  width: 100%;
  height: 36%;
  padding-bottom: 4%;
  flex-direction: column;
  background-color: ${props => props.theme.title === 'light' ? props.theme.colors.secondary : props.theme.colors.secondary};
`

export const ContentContainer = styled.div`

`

export const Title = styled.h1`
  padding-top: 4%;
  color: ${props => props.theme.colors.secondary};
  font-size: ${props => props.theme.fontsSizes.desktop.h5};
  font-style: italic;
  width: 100%;
  background-color: ${props => props.theme.colors.primary};
  text-align: center;
  padding-bottom: 4%;
`

export const LogoFooter = styled.img`
  margin-left: 12%;
  margin-top: 10%;
  width: 36%;
  height: 36%;
  object-fit: contain;
  cursor: pointer;
  z-index: 1;
`

export const ContainerOptions = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid ${props => props.theme.colors.primary};
  padding-bottom: 5%;

  @media (max-width: 768px) {
    padding-bottom: 7%;
    justify-content: space-evenly;
  }
`

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  z-index: 1;
`

export const Option = styled.p`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontsSizes.desktop.h4};
  font-family: 'Poppins';
  margin-top: 4%;
  cursor: pointer;
  transition: all 0.3s;

  @media (max-width: 768px) {
    font-size: ${props => props.theme.fontsSizes.mobile.p_small};
  }

  &:hover {
    color: ${props => props.theme.title === 'light' ? props.theme.colors.red.primary : props.theme.colors.blue.quaternary};
  }
`

export const RowSocial = styled.div`
  margin-top: 5%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: 1200px) {
    height: 40px;
  }

  @media (max-width: 480px) {
    height: 20px;
  }
`

export const Social = styled.img`
  width: 100%;
  padding: 10%;
`

export const SocialBackground = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5%;
  height: 100%;
  background-color: ${props => props.theme.colors.primary};
  margin-right: 2%;
  padding: 0.5%;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.2);
  }
`

export const TextVersion = styled.p`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontsSizes.desktop.h5};
  font-family: 'Libre Franklin';
  text-align: center;
  margin-top: 5%;

  @media (max-width: 768px) {
    font-size: ${props => props.theme.fontsSizes.mobile.p_small};
  }

  @media (max-width: 400px) {
    font-size: ${props => props.theme.fontsSizes.mobile.caption};
  }
`

export const LateralImgFooterLeft = styled.img`
  position: absolute;
  left: 0;
  height: 100%;
  bottom: 0;
  z-index: 0;
`

export const LateralImgFooterRight = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 0;

  @media (max-width: 768px) {
    width: 200px;
  }

  @media (max-width: 600px) {
    width: 110px;
  }
`
