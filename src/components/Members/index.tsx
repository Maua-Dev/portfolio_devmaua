import React from "react";
import { Avatar, Biography, CardMember, CardSelect, Container, MemberName, RowCards, StackName, Title } from "./styles";
import profileImg from '../../assets/images/profile.png'

export const Members: React.FC = () => {
  return <Container>
    <Title id="members">Membros</Title>
    <RowCards>
      <CardSelect>Diretoria</CardSelect>
      <CardSelect>Devs</CardSelect>
      <CardSelect>Infra</CardSelect>
      <CardSelect>UX/UI</CardSelect>
      <CardSelect>POs</CardSelect>
      <CardSelect>Comunicação</CardSelect>
      <CardSelect>RH</CardSelect>
      <CardSelect>Financeiro</CardSelect>
      <CardSelect>Data Science</CardSelect>
    </RowCards>
    <RowCards style={{ justifyContent: 'flex-start', alignItems: 'none' }}>
      <CardMember>
        <Avatar src={profileImg} alt="profile" />
        <MemberName>Gabriela Formagge</MemberName>
        <StackName>UX/UI</StackName>
        <Biography>Ler bio</Biography>
      </CardMember>
      <CardMember>
        <Avatar src={profileImg} alt="profile" />
        <MemberName>Gabriela Formagge</MemberName>
        <StackName>UX/UI</StackName>
        <Biography>Ler bio</Biography>
      </CardMember>
      <CardMember>
        <Avatar src={profileImg} alt="profile" />
        <MemberName>Gabriela Formagge</MemberName>
        <StackName>UX/UI</StackName>
        <Biography>Ler bio</Biography>
      </CardMember>
      <CardMember>
        <Avatar src={profileImg} alt="profile" />
        <MemberName>Gabriela Formagge</MemberName>
        <StackName>UX/UI</StackName>
        <Biography>Ler bio</Biography>
      </CardMember>
      <CardMember>
        <Avatar src={profileImg} alt="profile" />
        <MemberName>Gabriela Formagge</MemberName>
        <StackName>UX/UI</StackName>
        <Biography>Ler bio</Biography>
      </CardMember>
      <CardMember>
        <Avatar src={profileImg} alt="profile" />
        <MemberName>Gabriela Formagge</MemberName>
        <StackName>UX/UI</StackName>
        <Biography>Ler bio</Biography>
      </CardMember>
      <CardMember>
        <Avatar src={profileImg} alt="profile" />
        <MemberName>Gabriela Formagge</MemberName>
        <StackName>UX/UI</StackName>
        <Biography>Ler bio</Biography>
      </CardMember>
      <CardMember>
        <Avatar src={profileImg} alt="profile" />
        <MemberName>Gabriela Formagge</MemberName>
        <StackName>UX/UI</StackName>
        <Biography>Ler bio</Biography>
      </CardMember>
    </RowCards>
  </Container>
}