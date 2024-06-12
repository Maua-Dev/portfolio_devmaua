import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 50%;
    background-color: #fff;
    border-radius: 30px;
    border: 4px solid ${props => props.theme.title === 'light' ? props.theme.colors.blue.quaternary : props.theme.colors.red.primary};
`
