import styled from 'styled-components'
import { shade } from 'polished';

export const Container = styled.div`
    display: none;
    @media (min-width: 768px) {
        display: contents;
        background-color: ${props => props.theme.colors.primary};
        height: 100%;
    }
`

export const Title = styled.h1`
    padding-top: 4%;
    color: ${props => props.theme.colors.secondary};
    font-size: ${props => props.theme.fontsSizes.desktop.h3};
    font-family: 'Libre Franklin';
    font-weight: 800;
    width: 100%;
    background-color: ${props => props.theme.colors.primary};
    text-align: center;

    @media (max-width: 768px) {
        font-size: ${props => props.theme.fontsSizes.mobile.h4};
    }
`

export const Content = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: ${props => props.theme.colors.primary};

`

export const Description = styled.h1`
    margin-top: 16%;
    text-align: justify;
    font-family: "Poppins";
    font-size: ${props => props.theme.fontsSizes.desktop.h5};
    line-height: 28px;
    font-weight: 400;
    margin-left: 10%;
    margin-right: 0%;
    color: ${props => props.theme.colors.secondary};

    @media (max-width: 768px) {
        font-size: ${props => props.theme.fontsSizes.mobile.p};
    }

    @media (max-width: 481px) {
        font-size: ${props => props.theme.fontsSizes.mobile.p_small};
    }
`
export const LeftContainer = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const Portal = styled.button`
    margin-top: 5%;
    width: 32%;
    height: 46px;
    background-color: ${props => props.theme.title === 'light' ? props.theme.colors.blue.quaternary : props.theme.colors.red.primary};
    color: ${props => props.theme.fontsSizes.colors.white};
    font-size: ${props => props.theme.fontsSizes.desktop.h5};
    font-weight: 700;
    margin-left: 10%;
    font-style: italic;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.4s;
    &:hover {
        background-color: ${props => props.theme.title === 'light' ? shade(0.1, props.theme.colors.blue.tertiary) : shade(0.1, props.theme.colors.red.quaternary)};
        
    }
    
    @media (max-width: 1024px) {
        width: 26%;
        font-size: ${props => props.theme.fontsSizes.mobile.h5};
    }

    @media (max-width: 768px) {
        width: 20%;
        font-size: ${props => props.theme.fontsSizes.mobile.p_small};
    }
`


export const RightContainer = styled.div`
    width: 48%;
    display: flex;
    align-items: center;
    height: fit-content;
`

export const PIImgBlack = styled.img`
    width: 380px;
    height: 100%;
    object-fit: contain;
    margin-top: 6%;

    @media (max-width: 1024px) {
        width: 280px;
    }
    
    @media (max-width: 768px) {
        width: 200px;
    }
`

export const PIImgWhite = styled.img`
    width: 380px;
    height: 100%;
    z-index: 100;
    object-fit: contain;
    margin-top: 18%;
    margin-left: -16%;
    
    @media (max-width: 1024px) {
        width: 280px;
    }

    @media (max-width: 768px) {
        width: 200px;
    }
`