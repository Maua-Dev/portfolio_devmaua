import React from "react";
import "./MemberContainerComponent.css";
import MiniCardComponent from "./MiniCardComponent";

export default function MemberContainerComponent(props) {
  return (
    <div className={`members-container ${props.isOpen && "open"}`}>
      {props.members[props.areaEscolhida].map((member, i) => {
        // Quando ele está aberto (isOpen) ele vai rapidamente desligar a opacidade e mudá-la depois, para dar o efeito de smooth

        function getMemberInformations(member) {
          // Pega as informações do github do membro
          // let githubName = member.githubLink.split(".com/").pop();
          // let githubApiUrl = "https://api.github.com/users/" + githubName;

          let memberInfo = {
            name: "Vitor",
            avatar: "https://avatars.githubusercontent.com/u/81604963?v=4",
            bio: "19 anos.\r\nEstudante de Engenharia da Computação no Instituto Mauá de Tecnologia. \r\nCurioso, dedicado, proativo e extrovertido nas horas vagas",
          };

          // fetch(githubApiUrl)
          //   .then((response) => response.json()) // Get from url and transform to a Json
          //   .then((data) => {
          //     memberInfo.name = data.name;
          //     memberInfo.avatar = data.avatar;
          //     memberInfo.bio = data.bio;
          //   });

          return (
            <MiniCardComponent i={i} memberInfo={memberInfo} member={member} />
          );
        }
        return getMemberInformations(member);
      })}
    </div>
  );
}
