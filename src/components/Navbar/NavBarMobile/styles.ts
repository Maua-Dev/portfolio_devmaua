import styled from 'styled-components';

export const Container = styled.div`
  display: none;
  width: 100%;
  align-items: center;
  background-color: ${ props => props.theme.title === 'light' ? props.theme.colors.blue.quaternary : props.theme.colors.primary };
  justify-content: space-between;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const ButtonIcon = styled.div`
  display: flex;
  justify-content: center;
  color: ${props => props.theme.fontsSizes.colors.white};
  align-items: center;
  margin-right: 20px;
  margin-top: 20px;
  background-color: transparent;
  border: none;
  font-size: 30px;
  cursor: pointer;
  font-weight: bold;
  width: 40px;
  height: 40px;
  transition: 0.4s;
  border-radius: 5px;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Logo = styled.img`
    margin-top: 12px;
    margin-left: 12px;
    width: 60px;
    max-height: 100%;
    cursor: pointer;
    object-fit: contain;
  
`;

export const NavMenu = styled.nav`
  display: flex;
  position: fixed;
  height: 100%;
  width: 70%;
  top: 0;
  right: 0;
  flex-direction: column;
  background-color: ${ props => props.theme.title === 'light' ? props.theme.colors.primary : props.theme.colors.primary };
  gap: 2%;
  z-index: 2;
`

export const MenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2%;
`

export const MenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-left: 10%;
`

export const Item = styled.button`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 2%;
  background-color: ${ props => props.theme.title === 'light' ? props.theme.colors.primary : props.theme.colors.primary };
  font-size: ${props => props.theme.fontsSizes.mobile.h5};
  font-weight: bold;
  border: none;
  color: ${props => props.theme.colors.secondary};
  
`

export const Icon = styled.div`
  margin-right: 6%;
  font-size: ${props => props.theme.fontsSizes.mobile.h4};
`

export const MenuLogo = styled.img`
  width: 70%;
  height: auto;
  object-fit: contain;
  margin: 8%;
  `

export const MenuFooter = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2%;
  position: absolute;
  bottom: 10%;
`

export const RowSocial = styled.div`
  margin-top: 5%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: 480px) {
    height: 40px;
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
  width: 15%;
  height: 100%;
  background-color: ${props => props.theme.colors.secondary};
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
  color: ${props => props.theme.colors.secondary};
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

export const Overlay = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  @media (max-width: 768px) {
    display: flex;
  }
`