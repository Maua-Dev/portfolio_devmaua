import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${ props => props.theme.colors.primary };
  width: 100%;
  height: 30%;
`;

export const Logo = styled.img`
  margin-top: 20px;
  width: 100px;
  height: 50px;
  cursor: pointer;
  object-fit: contain;
`;

export const ButtonNavbar = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 4cqb;
  margin-top: 20px;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: ${props => props.theme.title === 'light' ? props.theme.fontsSizes.colors.black : props.theme.fontsSizes.colors.white};
  font-weight: bold;
  width: 180px;
  height: 40px;
  transition: 0.4s;
  border-radius: 5px;
  &:hover {
    transform: scale(1.1);

  }
`;

export const ButtonIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  margin-top: 20px;
  background-color: transparent;
  border: none;
  font-size: 20px;
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