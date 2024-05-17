import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 4%;
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  padding: 0 2%;
  width: 100%;
  height: 32%;
`


export const ContainerDesktop = styled.div`
  display: block;

  @media (max-width: 768px) {
    display: none;
  }
`

export const ContainerMobile = styled.div`
  display: none;
  background-color: ${props => props.theme.colors.primary};
  @media (max-width: 768px) {
    display: block;
  }
`

export const ContainerSecondary = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%; 

`

export const AboutImg = styled.img`
  width: 80%;
  height: 80%;
  object-fit: contain;
  margin-top: 8%;

  @media (max-width: 768px) {
    float: left;
    width: 50%;
  }
`

export const Title = styled.h1`
  padding-top: 4%;
  color: ${props => props.theme.colors.secondary};
  font-size: ${props => props.theme.fontsSizes.desktop.h3};
  font-family: 'Libre Franklin';
  font-weight: 800;
  width: 100%;
  background-color: ${props => props.theme.colors.primary};
  text-align: center;

  @media (max-width: 768px) {
    font-size: ${props => props.theme.fontsSizes.mobile.h4};
  }
`

export const Description = styled.h1`
  margin-top: 12%;
  text-align: justify;
  font-family: "Poppins";
  font-size: ${props => props.theme.fontsSizes.desktop.h5};
  font-weight: 400;
  color: ${props => props.theme.colors.secondary};
  line-height: 25px;

  @media (max-width: 768px) {
    font-size: ${props => props.theme.fontsSizes.mobile.p_small};
    line-height: 14px;
    margin-top: 6%;
  }
`