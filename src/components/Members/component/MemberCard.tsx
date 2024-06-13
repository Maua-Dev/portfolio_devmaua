import React, { useContext } from "react";
import { Container, LeftContainer, MemberData, MemberKey, MemberName, MemberPhoto, MemberSocial, MemberTech, MemberValue, RightContainer, Social } from "./styles";
import { Member } from "..";
import { ThemeContext } from "styled-components";
import { bucketURL } from "../../../utils/enviroments";

interface MemberCardProps { member: Member } 

function calcularIdade(dataNascimento : string) {

  const hoje = new Date();
  const nascimento = new Date(dataNascimento);
  let idade = hoje.getFullYear() - nascimento.getFullYear();
  const mes = hoje.getMonth() - nascimento.getMonth();

  if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
    idade--;
  }

  return idade;
}

export const MemberCard: React.FC <MemberCardProps> = ({member}) => {
  const theme = useContext(ThemeContext);

  function handleGithub() {
    window.location.href = member.github;
  }
  function handleLinkedin() {
    window.location.href = member.linkedin;
  }
  
  const idade = calcularIdade(member.birthday);
  
  return (
    <Container>
      <LeftContainer>
        <MemberName>{member.name}</MemberName>
        <MemberData>
          <MemberKey>Curso: </MemberKey>
          <MemberValue>{member.course}</MemberValue>
        </MemberData>
        <MemberData>
          <MemberKey>Ano: </MemberKey>
          <MemberValue>{member.year}</MemberValue>
        </MemberData>
        <MemberData>
          <MemberKey>Idade: </MemberKey>
          <MemberValue>{idade}</MemberValue>
        </MemberData>
        <MemberTech>
          <MemberKey>Principais Tecnologias: </MemberKey>
          <MemberValue>{member.technologies.map((t, i) => (
            <React.Fragment key={i}>
                    {t}
                    {i < member.technologies.length - 1 && ", "}
                  </React.Fragment>
                ))}</MemberValue>
        </MemberTech>
      </LeftContainer>
      <RightContainer>
        <MemberPhoto src={member.photo} alt="profile" />
        <MemberSocial>
          {member.linkedin && (
            <Social
              onClick={handleLinkedin}
              src={theme?.title === "light" ? `${bucketURL}/instaBlack.png` : `${bucketURL}/instaWhite.png`}
              alt="LinkedIn"
            />
          )}
          {member.github && (
            <Social
              onClick={handleGithub}
              src={theme?.title === "light" ? `${bucketURL}/githubBlack.png` : `${bucketURL}/githubWhite.png`}
              alt="GitHub"
            />
          )}
        </MemberSocial>
      </RightContainer>
    </Container>
  )
}
