import styled from 'styled-components';


export const Container = styled.div`
  padding-top: 4%;
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  padding: 0 2%;
  width: 100%;
  height: 32%;
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
`

export const Description = styled.h1`
  margin-top: 12%;
  text-align: justify;
  font-family: "Poppins";
  font-size: ${props => props.theme.fontsSizes.desktop.h5};
  font-weight: 400;
  color: ${props => props.theme.colors.secondary};
  line-height: 25px;
`