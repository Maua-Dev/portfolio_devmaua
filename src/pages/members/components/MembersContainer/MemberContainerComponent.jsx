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

          // let memberInfo = {
          //   // Dicionário para passar as informações para o modal
          //   name: "",
          //   avatar: "",
          //   hobby: "",

          // };

          return (
            <MiniCardComponent
              key={i}
              member={member}
            />
          );
        }
        return getMemberInformations(member);
      })}
    </div>
  );
}
