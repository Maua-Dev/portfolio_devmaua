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

    @media (max-width: 1440px) {
    height: 500px;
    }

    @media (max-width: 768px) {
    height: 400px;
    }

    @media (max-width: 425px) {
    height: 300px;
    }    
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

    @media (max-width: 768px) {
    font-size: ${props => props.theme.fontsSizes.mobile.p_small};
    }

    @media (max-width: 400px) {
    font-size: ${props => props.theme.fontsSizes.mobile.caption};
    }
    `

export const MemberData = styled.div`
    margin-top: 5%;
    display: flex;
    gap: 2%;
    `
export const MemberTech = styled.div`
    margin-top: 5%;
    gap: 2%;

    @media (max-width: 768px) {
    font-size: ${props => props.theme.fontsSizes.mobile.p_small};
    }

    @media (max-width: 400px) {
    font-size: ${props => props.theme.fontsSizes.mobile.caption};
    }
    `

export const MemberValue = styled.div`
    font-family: 'Poppins';
    font-weight: 400;
    line-height: 20px;
    color: ${props => props.theme.colors.secondary};

    @media (max-width: 768px) {
    font-size: ${props => props.theme.fontsSizes.mobile.p_small};
    }

    @media (max-width: 400px) {
    font-size: ${props => props.theme.fontsSizes.mobile.caption};
    }
    `

export const MemberKey = styled.div`
    font-family: 'Poppins';
    font-weight: 700;
    line-height: 20px;
    color: ${props => props.theme.colors.secondary};

    @media (max-width: 768px) {
    font-size: ${props => props.theme.fontsSizes.mobile.p_small};
    }

    @media (max-width: 400px) {
    font-size: ${props => props.theme.fontsSizes.mobile.caption};
    }
`

export const RightContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5%;
`

export const Social = styled.img`
    width: 80px;
    height: 80px;
    cursor: pointer;
    transition: all 0.3s;
    display: flex;

    @media (max-width: 1440px) {
    width: 60px;
    height: 60px;
    }

    @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    }

    @media (max-width: 600px) {
    width: 20px;
    height: 20px;
    }

    &:hover {
        transform: scale(1.2);
    }
`

export const CircleMF = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 100%;
    background-color: ${props => props.theme.title === 'light' ? props.theme.colors.blue.quaternary : props.theme.colors.red.primary};
    transition: all 0.3s;
    align-items: center;
    justify-content: center;
    display: flex;

    @media (max-width: 1440px) {
    width: 60px;
    height: 60px;
    }

    @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    }

    @media (max-width: 600px) {
    width: 20px;
    height: 20px;
    }

    &:hover {
        transform: scale(1.2);
    }
`

export const MemberSocial = styled.div`
    margin-top: 10%;
    display: flex;
    width: 90%;
    height: 40%;
    justify-content: center;
    gap: 5%;
`

export const MemberPhoto = styled.img`
    margin-top: 10%;
    width: 280px;
    height: 280px;
    object-fit: cover;
    border-radius: 50%;
    display: flex;
    margin: auto;
    border: 3px solid ${props => props.theme.title === 'light' ? props.theme.colors.blue.quaternary : props.theme.colors.red.primary};
    background-color: #FFFFFF;

    @media (max-width: 1440px) {
    width: 230px;
    height: 230px;
    }

    @media (max-width: 768px) {
    width: 180px;
    height: 180px;
    }

    @media (max-width: 600px) {
    width: 90px;
    height: 90px;
    }
`

export const Overlay = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
`