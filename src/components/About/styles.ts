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
`

export const Title = styled.h1`
  padding-top: 4%;
  color: ${props => props.theme.colors.secondary};
  font-size: ${props => props.theme.fontsSizes.desktop.h5};
  font-style: italic;
  width: 100%;
  background-color: ${props => props.theme.colors.primary};
  text-align: center;
`

export const Description = styled.h1`
  margin-top: 16%;
  font-size: ${props => props.theme.fontsSizes.desktop.p};
  color: ${props => props.theme.colors.secondary};
`