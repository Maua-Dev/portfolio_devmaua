import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 4%;
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  padding: 0 2%;
  width: 100%;
  height: 32%;
  gap: 1%;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
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

export const AboutImg = styled.img`
  position: relative;
  width: 40%;
  object-fit: contain;
  align-self: end;

  @media (max-width: 768px) {
    position:absolute;
    width: 20%;
    margin-right: 5%;
    right: 0;
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
  font-family: "Poppins";
  font-size: ${props => props.theme.fontsSizes.desktop.p};
  font-weight: 400;
  color: ${props => props.theme.colors.secondary};
  line-height: 25px;
  margin-top: 1%;

  @media (max-width: 768px) {
    font-size: ${props => props.theme.fontsSizes.mobile.p};
  }

  @media (max-width: 481px) {
    font-size: ${props => props.theme.fontsSizes.mobile.p_small};
  }

`

export const Card = styled.div`
  display: flex;
  width: 100%;
  padding: 2%;
  margin-top: 2%;
  flex-direction: column;
  background-color: ${props => props.theme.colors.gray.primary};
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 80%;
  }
`

export const CardTitle = styled.p`
  font-size: ${props => props.theme.fontsSizes.desktop.h5};
  font-family: 'Poppins';
  font-weight: 600;
  color: ${props => props.theme.colors.secondary};

  @media (max-width: 1024px) {
    font-size: ${props => props.theme.fontsSizes.mobile.h5};
  }
`

export const ContainerSecondary = styled.div`
  display: flex;
  position: relative;
  width: 100%;

`