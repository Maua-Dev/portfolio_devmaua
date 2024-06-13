import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    justify-content: center;
    align-items: center;
    width: 70%;
    height: 60%;
    background-color: ${props =>  props.theme.colors.primary };
    border-radius: 30px;
    border: 4px solid ${props => props.theme.title === 'light' ? props.theme.colors.blue.quaternary : props.theme.colors.red.primary};
    display: flex;
`

export const LeftContainer = styled.div`
    width: 50%;
    justify-content: center;
    align-items: center;
    padding: 5%;
    height: 100%;
`

export const MemberName = styled.div`
    font-family: 'Poppins';
    font-size: ${props => props.theme.fontsSizes.desktop.h4};
    font-weight: 700;
    line-height: 32px;
    color: ${props => props.theme.colors.secondary};
    `

export const MemberData = styled.div`
    margin-top: 5%;
    display: flex;
    gap: 2%;
    `
export const MemberTech = styled.div`
    margin-top: 5%;
    gap: 2%;
    `

export const MemberValue = styled.div`
    font-family: 'Poppins';
    font-weight: 400;
    line-height: 20px;
    color: ${props => props.theme.colors.secondary};
    `

export const MemberKey = styled.div`
    font-family: 'Poppins';
    font-weight: 700;
    line-height: 20px;
    color: ${props => props.theme.colors.secondary};
    `

export const RightContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Social = styled.img`
    width: 20%;
    height: 50%;
    margin-right: 2%;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
        transform: scale(1.2);
    }
`

export const MemberSocial = styled.div`
    margin-top: 20%;
    display: flex;
    width: 90%;
    height: 40%;
    justify-content: center;
    margin-right: 10%;
    gap: 4%;
`

export const MemberPhoto = styled.img`
    margin-top: 10%;
    width: 40%;
    height: 40%;
    object-fit: contain;
    border-radius: 100%;
    border: 3px solid ${props => props.theme.colors.blue.quaternary};
    background-color: #FFFFFF;
`