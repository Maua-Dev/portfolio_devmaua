import React, { useEffect, useState } from "react";
import { Avatar, Biography, CardMember, CardSelect, Container, MemberName, RowCards, StackName, Title } from "./styles";
import { MemberCard } from "./component/MemberCard";
import axios from "axios";
import { bucketURL } from "../../utils/enviroments";
import { Loader, LoaderContainer, LoaderDot } from "./styles"; // Importe os estilos do carregamento

export type Member = {
  name: string;
  photo: string;
  ra: string;
  email_dev: string;
  tag: string[];
  course: string;
  year: string;
  technologies: string[];
  birthday: string;
  linkedin?: string;
  github?: string;
}

export const Members: React.FC = () => {
  const [filtro, setFiltro] = useState<string>("")
  const [todosMembros, setTodosMembros] = useState<Member[]>([])
  const [membros, setMembros] = useState<Member[]>([])
  const [member, setMember] = useState<Member | null>(null)
  const [tagsDisponiveis, setTagsDisponiveis] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMembers = async () => {
      const response = await axios.get(`${bucketURL}/members.json`);
      const responseSorted: Member[] = response.data.sort((a: Member, b: Member) => a.name.localeCompare(b.name));

      const allTags = Array.from(new Set(responseSorted.flatMap(m => m.tag)));
      setTagsDisponiveis(allTags);

      setTodosMembros(responseSorted);
      setMembros(responseSorted);
      setIsLoading(false); // Membros carregados
    };
    fetchMembers();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      if (filtro === '') {
        setMembros(todosMembros);
      } else {
        setMembros(todosMembros.filter((m) => m.tag.includes(filtro)));
      }
    }
  }, [filtro, todosMembros, isLoading]);

  const toggleFiltro = (filt: string) => {
    if (filtro === filt) {
      setFiltro("Sem filtro");
      setIsLoading(true);
      setTimeout(() => { setFiltro(''); setIsLoading(false); }, 500);
    } else {
      setFiltro("Sem filtro");
      setIsLoading(true);
      setTimeout(() => { setFiltro(filt); setIsLoading(false); }, 500);
    }
  }

  const handleClick = (filt: string) => {
    toggleFiltro(filt);
  }

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = bucketURL + "/perfilErro.png";
  }

  return (
    <Container isTransitioning={false}> {/* Atualize conforme necessário */}
      {member != null && <MemberCard member={member} setMember={setMember} />}
      <Title id="members">Membros</Title>
      <RowCards>
        {tagsDisponiveis.map((tag) => (
          <CardSelect key={tag} selected={filtro === tag} onClick={() => handleClick(tag)}>
            {tag}
          </CardSelect>
        ))}
      </RowCards>
      {isLoading ? (
        <LoaderContainer>
          <Loader>
            <LoaderDot />
            <LoaderDot />
            <LoaderDot />
          </Loader>
        </LoaderContainer>) : (
        <RowCards style={{ justifyContent: 'flex-start' }}>
          {membros.map((data, index) => (
            <CardMember key={data.ra} onClick={() => setMember(data)} delay={index * 100}>
              <Avatar src={bucketURL + "/" + data.photo} onError={handleImageError} alt="profile" />
              <MemberName>{data.name}</MemberName>
              <StackName>
                {data.tag.map((t, i) => (
                  <React.Fragment key={i}>
                    {t}
                    {i < data.tag.length - 1 && ", "}
                  </React.Fragment>
                ))}
              </StackName>
              <Biography>Ler bio</Biography>
            </CardMember>
          ))}
        </RowCards>
      )}
    </Container>
  );
}
