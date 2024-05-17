import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 4%;
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  padding: 0 2%;
  width: 100%;
  height: 32%;
  padding-bottom: 4%;
  flex-direction: column;
  
`

export const Title = styled.h1`
  padding-top: 4%;
  color: ${props => props.theme.colors.secondary};
  font-size: ${props => props.theme.fontsSizes.desktop.h3};
  font-family: 'Libre Franklin';
  width: 100%;
  background-color: ${props => props.theme.colors.primary};
  text-align: center;
  padding-bottom: 4%;

  @media (max-width: 768px) {
    font-size: ${props => props.theme.fontsSizes.mobile.p};
  }
`

export const RowCards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

export const CardSelect = styled.div`
  height: auto;
  width: fit-content;
  margin: 8px;
  font-size: ${props => props.theme.fontsSizes.desktop.h5};
  font-family: 'Poppins';
  font-weight: 400;
  padding: 4px;
  border: 3px solid ${props => props.theme.colors.secondary};
  border-radius: 10px;
  color: ${props => props.theme.colors.secondary};
  cursor: pointer;
  transition: all 0.3s;

  @media (max-width: 1279px) {
    font-size: ${props => props.theme.fontsSizes.mobile.p};
    padding: 3px;
    margin: 6px;
    border-radius: 8px;
    border: 2px solid ${props => props.theme.colors.secondary};
  }

  @media (max-width: 768px) {
    font-size: ${props => props.theme.fontsSizes.mobile.caption};
    padding: 2px;
    margin: 4px;
    border-radius: 5px;
    border: 1px solid ${props => props.theme.colors.secondary};
  }

  &:hover {
    border-color: ${props => props.theme.colors.secondary};
    /* color: ${props => props.theme.colors.blue.quaternary}; */
  }
`

export const CardMember = styled.div`
  width: 23%;
  height: 36%;
  border-radius: 12px;
  /* border: 3px solid ${props => props.theme.colors.blue.quaternary}; */
  display: flex;
  margin: 0 1%;
  padding: 1%;
  margin-top: 4%;
  flex-direction: column;
`

export const Avatar = styled.img`
  width: 40%;
  height: 40%;
  object-fit: contain;
  border-radius: 100%;
  border: 3px solid ${props => props.theme.title === 'light' ? props.theme.colors.blue.quaternary : props.theme.colors.red.primary};
`

export const MemberName = styled.h2`
  color: ${props => props.theme.colors.secondary};
  font-size: ${props => props.theme.fontsSizes.desktop.h4};
  margin-top: 4%;

  @media (max-width: 768px) {
    font-size: ${props => props.theme.fontsSizes.mobile.p_small};
  }
`

export const StackName = styled.h3`
  color: ${props => props.theme.colors.gray.primary};
  font-size: ${props => props.theme.fontsSizes.desktop.h5};
  margin-top: 2%;

  @media (max-width: 768px) {
    font-size: ${props => props.theme.fontsSizes.mobile.p_small};
  }
`

export const Biography = styled.p`
  color: ${props => props.theme.colors.red.primary};
  font-size: ${props => props.theme.fontsSizes.desktop.h5};
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: ${props => props.theme.fontsSizes.mobile.p_small};
  }

  &:hover {
    text-decoration: underline;
  }
`
