import styled from 'styled-components';

export const Container = styled.div`
    position: fixed; 
    top: 50%; 
    left: 50%; 
    transform: translate(-50%, -50%);
    justify-content: center;
    align-items: center;
    width: 70%;
    height: 60%;
    background-color: ${props =>  props.theme.colors.primary };
    border-radius: 30px;
    border: 4px solid ${props => props.theme.title === 'light' ? props.theme.colors.blue.quaternary : props.theme.colors.red.primary};
    display: flex;
    z-index: 1000;
`

export const LeftContainer = styled.div`
    width: 50%;
    justify-content: center;
    align-items: center;
    padding: 5%;
    height: 100%;
`

export const Social = styled.img`
    width: 100px;
    height: 100px;
    margin-right: 2%;
    cursor: pointer;
    transition: all 0.3s;
    margin-left: 20%;

    &:hover {
    transform: scale(1.2);
    }
`

export const ProjectName = styled.div`
    font-family: 'Poppins';
    font-size: ${props => props.theme.fontsSizes.desktop.h3};
    font-weight: 700;
    color: ${props => props.theme.colors.secondary};
    line-height: 68px;
    display: flex;
`
export const Technologies = styled.div`
    font-family: 'Poppins';
    font-size: ${props => props.theme.fontsSizes.desktop.h4};
    font-weight: 400;
    line-height: 20px;
    color: ${props => props.theme.title === 'light' ? props.theme.colors.blue.quaternary : props.theme.colors.red.primary};
    margin-top: 5%;
`
export const Data = styled.div`
    font-family: 'Poppins';
    font-size: ${props => props.theme.fontsSizes.desktop.h4};
    font-weight: 400;
    line-height: 20px;
    color: ${props => props.theme.colors.secondary};
    margin-top: 5%;
`

export const RightContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ProjectImage = styled.img`
    margin-top: 10%;
    width: 60%;
    height: 60%;
    object-fit: contain;
    border-radius: 100%;
    border: 3px solid ${props => props.theme.title === 'light' ? props.theme.colors.blue.quaternary : props.theme.colors.red.primary};
    background-color: #FFFFFF;
`
export const ProjectImageFood = styled.img`
    margin-top: 10%;
    width: 60%;
    height: 60%;
    object-fit: contain;
    border-radius: 100%;
    border: 3px solid ${props => props.theme.title === 'light' ? props.theme.colors.blue.quaternary : props.theme.colors.red.primary};
    background-color: #000;
`