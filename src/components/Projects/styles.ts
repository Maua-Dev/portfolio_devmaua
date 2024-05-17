import styled from "styled-components";

export const Container = styled.div`
  padding-top: 4%;
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  padding: 0 2%;
  width: 100%;
  height: 32%;
  padding-bottom: 4%;

  @media (max-width: 768px) {
    height: 180px;
  }

  @media (max-width: 400px){
    height: 100px;
  }
`

export const Title = styled.h1`
  padding-top: 4%;
  color: ${props => props.theme.colors.secondary};
  font-size: ${props => props.theme.fontsSizes.desktop.h3};
  font-family: 'Libre Franklin';
  width: 100%;
  background-color: ${props => props.theme.colors.primary};
  text-align: center;
  padding-bottom: 4%;

  @media (max-width: 768px) {
    font-size: ${props => props.theme.fontsSizes.mobile.p};
  }
`

export const CardProject = styled.div`
  width: 240px;
  height: 240px;
  background-color: ${props => props.theme.fontsSizes.colors.white};
  border-radius: 12px;
  border: 3px solid ${props => props.theme.colors.blue.quaternary};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1%;
  padding: 1%;

  @media (max-width: 768px) {
    height: 160px;
    width: 160px;
    border: 2px solid ${props => props.theme.colors.blue.quaternary};
  }

  @media (max-width: 400px) {
    height: 80px;
    width: 80px;
    border: 1px solid ${props => props.theme.colors.blue.quaternary};
  }
`

export const CircleMF = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  background-color: ${props => props.theme.fontsSizes.colors.black};
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`