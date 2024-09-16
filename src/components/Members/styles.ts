import { rgba } from 'polished'
import styled, { keyframes } from 'styled-components'

export const Container = styled.div<{ isTransitioning: boolean }>`
  padding-top: 4%;
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  padding: 0 2%;
  width: 100%;
  height: 32%;
  padding-bottom: 4%;
  flex-direction: column;
  flex-wrap: wrap;
`

const dotBounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh; /* Ajuste conforme necessário */
  width: 100%;
`

export const LoaderDot = styled.div`
  width: 50px;
  height: 50px;
  margin: 0 5px;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 50%;
  animation: ${dotBounce} 0.6s infinite alternate;
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.4s;
  }
`

export const Loader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20%;
  height: 60px;
`

export const Title = styled.h1`
  padding-top: 4%;
  color: ${(props) => props.theme.colors.secondary};
  font-size: ${(props) => props.theme.fontsSizes.desktop.h3};
  font-family: 'Libre Franklin';
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  text-align: center;
  padding-bottom: 4%;

  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontsSizes.mobile.p};
  }
`

export const RowCards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
`

export const CardSelect = styled.div<{ selected: boolean }>`
  height: auto;
  width: fit-content;
  margin: 8px;
  font-size: ${(props) => props.theme.fontsSizes.desktop.h5};
  font-family: 'Poppins';
  font-weight: 400;
  padding: 4px;
  border: 3px solid
    ${(props) =>
      props.selected
        ? (props) =>
            props.theme.title === 'light'
              ? props.theme.colors.blue.tertiary
              : props.theme.colors.red.tertiary
        : (props) =>
            props.theme.title === 'light'
              ? props.theme.colors.blue.quaternary
              : props.theme.colors.red.primary};
  border-radius: 10px;
  background-color: ${(props) =>
    props.theme.title === 'light'
      ? rgba(39, 2, 114, 0.3)
      : rgba(134, 0, 0, 0.3)};
  color: ${(props) => props.theme.colors.secondary};
  cursor: pointer;
  transition: all 0.3s;

  @media (max-width: 1279px) {
    font-size: ${(props) => props.theme.fontsSizes.mobile.p};
    padding: 3px;
    margin: 6px;
    border-radius: 8px;
    border: 2px solid
      ${(props) =>
        props.theme.title === 'light'
          ? props.theme.colors.blue.quaternary
          : props.theme.colors.red.primary};
  }

  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontsSizes.mobile.caption};
    padding: 2px;
    margin: 4px;
    border-radius: 5px;
    border: 1px solid
      ${(props) =>
        props.theme.title === 'light'
          ? props.theme.colors.blue.quaternary
          : props.theme.colors.red.primary};
  }

  &:hover {
    border-color: ${(props) => props.theme.colors.secondary};
  }
`

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const CardMember = styled.div<{ delay: number }>`
  animation: ${fadeIn} 0.5s ease-in-out;
  animation-delay: ${({ delay }) => delay}ms;
  animation-fill-mode: both;
  /* box-shadow: 0px 5px 8px ${(props) => props.theme.colors.secondary}; */
  width: 300px;
  height: 400px;
  border-radius: 12px;
  transition: all 0.4s ease-in-out;
  transition-delay: ${(props) => props.delay}ms;
  display: flex;
  margin: 0 1%;
  margin-left: auto;
  margin-right: auto;
  padding: 1%;
  margin-top: 4%;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 1440px) {
    width: 250px;
    height: 350px;
  }

  @media (max-width: 1220px) {
    width: 250px;
    height: 280px;
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }

  @media (max-width: 600px) {
    width: 110px;
    height: 140px;
  }
`

export const Avatar = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 100%;
  border: 3px solid
    ${(props) =>
      props.theme.title === 'light'
        ? props.theme.colors.blue.quaternary
        : props.theme.colors.red.primary};
  background-color: #ffffff;
  transition: 0.4s;

  @media (max-width: 1100px) {
    width: 100px;
    height: 100px;
  }

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
  }

  @media (max-width: 600px) {
    width: 40px;
    height: 40px;
  }

  &:hover {
    transform: scale(1.1);
  }
`

export const MemberName = styled.h2`
  color: ${(props) => props.theme.colors.secondary};
  font-size: ${(props) => props.theme.fontsSizes.desktop.h5};
  margin-top: 4%;
  font-family: 'Poppins';
  font-weight: 700;

  @media (max-width: 1220px) {
    font-size: ${(props) => props.theme.fontsSizes.desktop.h5};
  }

  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontsSizes.mobile.p_small};
  }
`

export const StackName = styled.h3`
  color: ${(props) => props.theme.colors.gray.secondary};
  font-size: ${(props) => props.theme.fontsSizes.desktop.h5};
  margin-top: 1%;
  font-family: 'Poppins';

  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontsSizes.mobile.p_small};
  }
`

export const Biography = styled.p`
  color: ${(props) => props.theme.colors.red.primary};
  font-size: ${(props) => props.theme.fontsSizes.desktop.h5};
  cursor: pointer;
  font-family: 'Poppins';

  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontsSizes.mobile.p_small};
  }

  &:hover {
    text-decoration: underline;
  }
`
