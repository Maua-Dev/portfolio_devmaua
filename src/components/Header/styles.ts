import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  padding: 0 2%;
  width: 100%;
  height: 32%;
`

export const LogoHeader = styled.img`
  margin-top: 10%;
  width: 72%;
  height: 40%;
  object-fit: contain;
`

export const Description = styled.h1`
  margin-top: 12%;
  font-size: ${props => props.theme.fontsSizes.desktop.p};
  color: ${props => props.theme.colors.secondary};
`

export const ContainerSecondary = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
`

export const HeaderImg = styled.img`
  width: 80%;
  height: 80%;
  object-fit: contain;
  margin-left: 20%;
`

export const SelectiveProcessBtn = styled.button`
  margin-top: 4%;
  width: 32%;
  height: 20px;
  background-color: ${props => props.theme.colors.blue.quaternary};
  color: ${props => props.theme.colors.secondary};
  font-size: ${props => props.theme.fontsSizes.desktop.p};
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    background-color: ${props => shade(0.1, props.theme.colors.blue.quaternary)};

  }
`