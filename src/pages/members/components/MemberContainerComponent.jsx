import React from "react";
import "./MemberContainerComponent.css";
import MiniCardComponent from "./MiniCardComponent";
import githubFetch from "../assets/github.json";

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
            name: "",
            avatar: "",
            bio: "",
          };

          // fetch(githubApiUrl)
          //   .then((response) => response.json()) // Get from url and transform to a Json
          //   .then((data) => {
          //     memberInfo["name"] = data.name;
          //     memberInfo["avatar"] = data.avatar;
          //     memberInfo["bio"] = data.bio;
          //   });

          // PARA SIMULAÇÃO DO GITHUB

          memberInfo["name"] = githubFetch.name;
          memberInfo["avatar"] = githubFetch.avatar_url;
          memberInfo["bio"] = githubFetch.bio;

          return (
            <MiniCardComponent
              key={i}
              memberInfo={memberInfo}
              member={member}
              // getModalInfo={props.getModalInfo}
            />
          );
        }
        return getMemberInformations(member);
      })}
    </div>
  );
}
