import { rgba } from "polished";
import styled from "styled-components";

export const Background = styled.div`
  background-color: ${props => props.theme.colors.primary};
`

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.title === 'light' ? rgba(134, 0, 0, 0.31) : rgba(39, 2, 114, 0.17)};
  padding-bottom: 6%;
  width: 100%;

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  
  }
`

export const Title = styled.h1`
  padding-top: 4%;
  color: ${props => props.theme.colors.secondary};
  font-size: ${props => props.theme.fontsSizes.desktop.h3};
  font-family: 'Libre Franklin';
  width: 100%;
  background-color: ${props => props.theme.title === 'light' ? rgba(134, 0, 0, 0.31) : rgba(39, 2, 114, 0.17)};
  text-align: center;
  padding-bottom: 4%;

  @media (max-width: 768px) {
    font-size: ${props => props.theme.fontsSizes.mobile.p};
  }
`

export const CardProject = styled.div`
  width: 350px;
  height: 350px;
  background-color: ${props => props.theme.fontsSizes.colors.white};
  border-radius: 12px;
  border: 3px solid ${props => props.theme.colors.blue.quaternary};
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1279px) {
    height: 160px;
    width: 160px;
    border: 3px solid ${props => props.theme.colors.blue.quaternary};
  }

  @media (max-width: 768px) {
    height: 120px;
    width: 120px;
    border: 2px solid ${props => props.theme.colors.blue.quaternary};
    margin-bottom: 20%;
  }

  @media (max-width: 400px) {
    height: 80px;
    width: 80px;
    border: 1px solid ${props => props.theme.colors.blue.quaternary};
    margin-bottom: 20%;
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

export const ArrowButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 3%;
  width: 100%;
  gap: 2%;

  .slider-arrow {
    color: #860000E5;
    font-size: 40px;
    cursor: pointer;

    @media (max-width: 1279px) {
      font-size: 30px;
    }

    @media (max-width: 400px) {
      font-size: 20px;
    }
  }
`
