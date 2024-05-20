import styled from 'styled-components';

export const Container = styled.div`
  display: none;
  width: 100%;
  align-items: center;
  background-color: ${ props => props.theme.title === 'light' ? props.theme.colors.primary : props.theme.colors.primary };
  justify-content: space-between;

  @media (max-width: 768px) {
    display: flex;
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

export const ThemeIcon = styled.div`
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
  display: block;
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