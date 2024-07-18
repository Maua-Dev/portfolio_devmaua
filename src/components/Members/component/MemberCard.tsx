import React, { useContext, useEffect, useRef } from "react";
import { CircleMF, Container, LeftContainer, MemberData, MemberKey, MemberName, MemberPhoto, MemberSocial, MemberTech, MemberValue, Overlay, RightContainer, Social } from "./styles";
import { Member } from "..";
import { ThemeContext } from "styled-components";
import { bucketURL } from "../../../utils/enviroments";

interface MemberCardProps { 
  member: Member,
  setMember : (member: Member | null) => void
}

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

export const MemberCard: React.FC <MemberCardProps> = ({member, setMember}) => {

  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setMember(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setMember]);


  const theme = useContext(ThemeContext)

  function handleGithub() {
    if (member.github) {window.open(member.github, "_blank")}
  }
  function handleLinkedin() {
    if (member.linkedin) {window.open(member.linkedin, "_blank")}
  }
  
  const idade = calcularIdade(member.birthday)

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = bucketURL + "/perfilErro.png";
  }
  
  return (
    <Overlay>
      <Container ref={ref}>
        <LeftContainer>
          <MemberName>{member.name}</MemberName>
          {member.course && (
            <MemberData>
              <MemberKey>Curso: </MemberKey>
              <MemberValue>{member.course}</MemberValue>
            </MemberData>
          )}
          {member.year && (
            <MemberData>
              <MemberKey>Ano: </MemberKey>
              <MemberValue>{member.year[0]} °</MemberValue>
            </MemberData>
          )}
          {member.birthday && (
            <MemberData>
              <MemberKey>Idade: </MemberKey>
              <MemberValue>{idade} anos</MemberValue>
            </MemberData>
          )}
          {member.technologies.length > 0 && (
            <MemberTech>
              <MemberKey>Principais Tecnologias: </MemberKey>
              <MemberValue>{member.technologies.map((t, i) => (
                <React.Fragment key={i}>
                        {t}
                        {i < member.technologies.length - 1 && ", "}
                      </React.Fragment>
                    ))}</MemberValue>
            </MemberTech>
          )}
        </LeftContainer>
        <RightContainer>
          <MemberPhoto src={bucketURL + "/" + member.photo} onError={handleImageError} alt="profile" />
          <MemberSocial>
            {member.linkedin && (
              <Social
                onClick={handleLinkedin}
                src={theme?.title === "light" ? `${bucketURL}/linkedinWhite.png` : `${bucketURL}/linkedinBlack.png`}
                alt="LinkedIn"
              />
            )}
            {member.github && (
              <Social
                onClick={handleGithub}
                src={theme?.title === "light" ? `${bucketURL}/githubMemberBlue.png` : `${bucketURL}/githubMemberRed.png`}
                alt="GitHub"
              />
            )}
          </MemberSocial>
        </RightContainer>
      </Container>
    </Overlay>
  )
}
