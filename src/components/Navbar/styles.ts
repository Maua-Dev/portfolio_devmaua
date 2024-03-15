import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  width: 100%;
  height: 30%;
`;

export const Logo = styled.img`
  margin-top: 20px;
  width: 100px;
  height: 50px;
  object-fit: contain;
  cursor: pointer;
`;

export const ButtonNavbar = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 4cqb;
  margin-top: 20px;
  background-color: #fff;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #000;
  font-weight: bold;
  width: 180px;
  height: 40px;
  transition: 0.4s;
  border-radius: 5px;
  &:hover {
    color: #fff;
    background-color: #000;

  }
`;