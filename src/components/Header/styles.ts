import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  padding: 0 2%;
  width: 100%;
  height: 32%;

  @media (max-width: 768px) {
    font-size: ${props => props.theme.fontsSizes.mobile.p};
    justify-content: center;
    flex-direction: column;
  }
`

export const LogoHeader = styled.img`
  margin-top: 10%;
  width: 107%;
  height: auto;
  object-fit: contain;

  @media ( max-width: 768px) {
    width: 80%

  }
`

export const Description = styled.h1`
  margin-top: 12%;
  text-align: justify;
  font-family: "Poppins";
  font-size: ${props => props.theme.fontsSizes.desktop.h5};
  line-height: 28px;
  font-weight: 400;
  color: ${props => props.theme.colors.secondary};

  @media (max-width: 768px) {
    font-size: ${props => props.theme.fontsSizes.mobile.p};
    line-height: 14px;
  }
`

export const ContainerSecondary = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;

  @media (max-width: 768px) {
    font-size: ${props => props.theme.fontsSizes.mobile.p};
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
  }
`

export const HeaderImg = styled.img`
  width: 80%;
  height: 80%;
  object-fit: contain;
  margin-top: 20%;
  margin-left: 12%;
  
  @media (max-width: 768px) {
    width: 40%;
  }
`

export const SelectiveProcessBtn = styled.button`
  margin-top: 4%;
  width: 32%;
  height: 46px;
  background-color: ${props => props.theme.title === 'light' ? props.theme.colors.blue.quaternary : props.theme.colors.red.primary};
  color: ${props => props.theme.fontsSizes.colors.white};
  font-size: ${props => props.theme.fontsSizes.desktop.h5};
  font-weight: 700;
  font-style: italic;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    background-color: ${props => props.theme.title === 'light' ? shade(0.1, props.theme.colors.blue.tertiary) : shade(0.1, props.theme.colors.red.quaternary)};

  }
`

export const SelectiveProcessBtnLightMode = styled.button`
  margin-top: 4%;
  width: 32%;
  height: 46px;
  background-color: ${props => props.theme.colors.red.primary};
  color: ${props => props.theme.colors.secondary};
  font-size: ${props => props.theme.fontsSizes.desktop.p};
  font-weight: 700;
  font-style: italic;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    background-color: ${props => shade(0.1, props.theme.colors.red.quaternary)};

  }
`