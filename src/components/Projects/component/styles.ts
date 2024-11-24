import styled from 'styled-components'

interface ContainerProps {
  fade: boolean
}

export const Container = styled.div<ContainerProps>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  justify-content: center;
  align-items: center;
  opacity: ${(props) => (props.fade ? '1' : '0')};
  transition: all 0.3s ease-in-out;
  width: 70%;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 30px;
  border: 4px solid
    ${(props) =>
      props.theme.title === 'light'
        ? props.theme.colors.blue.quaternary
        : props.theme.colors.red.primary};
  display: flex;
  z-index: 1000;

  @media (max-width: 1440px) {
    height: 600px;
  }

  @media (max-width: 768px) {
    height: 400px;
  }

  @media (max-width: 450px) {
    height: 300px;
    padding: 2%;
  }
`

export const LeftContainer = styled.div`
  width: 50%;
  justify-content: center;
  align-items: center;
  padding: 5%;
  height: 100%;

  @media (max-width: 425px) {
    padding: 0% 0% 5% 5%;
  }
`

export const ProjectName = styled.div`
  font-family: 'Poppins';
  font-size: ${(props) => props.theme.fontsSizes.desktop.h3};
  font-weight: 700;
  color: ${(props) => props.theme.colors.secondary};
  line-height: 68px;
  display: flex;

  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontsSizes.mobile.p};
    line-height: 39px;
  }

  @media (max-width: 400px) {
    line-height: 30px;
    font-size: ${(props) => props.theme.fontsSizes.mobile.p_small};
  }
`
export const Technologies = styled.div`
  font-family: 'Poppins';
  font-size: ${(props) => props.theme.fontsSizes.mobile.h4};
  font-weight: 400;
  line-height: 20px;
  color: ${(props) =>
    props.theme.title === 'light'
      ? props.theme.colors.blue.quaternary
      : props.theme.colors.red.primary};
  margin-top: 5%;

  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontsSizes.mobile.p_small};
  }

  @media (max-width: 400px) {
    font-size: ${(props) => props.theme.fontsSizes.mobile.caption};
  }
`
export const Data = styled.div`
  font-family: 'Poppins';
  font-size: ${(props) => props.theme.fontsSizes.mobile.h4};
  font-weight: 400;
  line-height: 20px;
  color: ${(props) => props.theme.colors.secondary};
  margin-top: 5%;

  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontsSizes.mobile.caption};
    line-height: 10px;
  }

  @media (max-width: 400px) {
    font-size: ${(props) => props.theme.fontsSizes.mobile.caption};
  }
`

export const Description = styled.div`
  font-family: 'Poppins';
  font-size: ${(props) => props.theme.fontsSizes.mobile.h4};
  font-weight: 400;
  line-height: 20px;
  color: ${(props) => props.theme.colors.secondary};
  text-align: justify;
  margin-top: 15%;

  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontsSizes.mobile.p_small};
  }

  @media (max-width: 450px) {
    font-size: ${(props) => props.theme.fontsSizes.mobile.caption};
    line-height: 12px;
    margin-right: 10%;
  }
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
  width: 400px;
  height: 400px;
  object-fit: cover;
  border-radius: 100%;
  border: 3px solid
    ${(props) =>
      props.theme.title === 'light'
        ? props.theme.colors.blue.quaternary
        : props.theme.colors.red.primary};
  background-color: #ffffff;

  @media (max-width: 1440px) {
    width: 250px;
    height: 250px;
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 600px) {
    width: 110px;
    height: 110px;
  }
`
export const ProjectImageFood = styled.img`
  width: 60%;
  height: 60%;
  object-fit: contain;
  border-radius: 100%;
  border: 3px solid
    ${(props) =>
      props.theme.title === 'light'
        ? props.theme.colors.blue.quaternary
        : props.theme.colors.red.primary};
  background-color: #000;

  @media (max-width: 1440px) {
    width: 250px;
    height: 250px;
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 600px) {
    width: 110px;
    height: 110px;
  }
`

export const Overlay = styled.div<ContainerProps>`
  position: fixed;
  opacity: ${(props) => (props.fade ? '1' : '0')};
  transition: all 0.3s ease-in-out;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`
