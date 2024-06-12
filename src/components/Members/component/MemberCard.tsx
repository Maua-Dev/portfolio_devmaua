import React from "react";
import { Container } from "./styles";
import { Member } from "..";

interface MemberCardProps { member: Member } 

export const MemberCard: React.FC <MemberCardProps> = ({member}) => {



  return (
    <Container>
      <h1>
        {member.name}
      </h1>
    </Container>
  )
}
