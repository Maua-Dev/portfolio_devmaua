import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 4%;
  background-color: ${props => props.theme.title === 'light' ? props.theme.colors.red.tertiary : props.theme.colors.secondary};
  display: flex;
  padding: 0 8%;
  width: 100%;
  height: 32%;
  padding-bottom: 4%;
  flex-direction: column;
  
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
  margin-top: 10%;
  width: 36%;
  height: 36%;
  object-fit: contain;
  cursor: pointer;
`

export const ContainerOptions = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid ${props => props.theme.colors.primary};
  padding-bottom: 5%;
`

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Option = styled.p`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontsSizes.desktop.p};
  margin-top: 4%;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: ${props => props.theme.title === 'light' ? props.theme.colors.secondary : props.theme.colors.blue.quaternary};
  }
`

export const RowSocial = styled.div`
  margin-top: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const Social = styled.img`
  width: 5%;
  height: 5%;
  margin-right: 2%;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.2);
  }
`

export const TextVersion = styled.p`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontsSizes.desktop.p_small};
  text-align: center;
  margin-top: 5%;
`
