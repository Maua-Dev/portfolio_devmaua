import React, { useState } from "react";
import "./Members.css";
import members from "./assets/dataMembers.json";

export default function MembersComponent() {
  const [areaEscolhida, setAreaEscolhida] = useState("Diretoria");
  const [isOpen, setOpen] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  function chooseArea(area) {
    //  Para aparecer poder selecionar
    setOpen(false);
    setDropdownOpen(false);

    setTimeout(() => {
      setAreaEscolhida(area);
      setOpen(true);
      // Para ter dellay e uma animaçãozinha
    }, 300);
  }

  return (
    <div className="MembersComponent pages" id="membros">
      <h1 className="titulo">Membros</h1>
      <div className="info">
        <div className="categories">
          {Object.keys(members).map((area) => {
            return (
              <button
                className={`button ${areaEscolhida === area && "open"}`} // Se estiver igual, ele vai considerar que está aberto e vai ficar branco
                key={area}
                onClick={() => chooseArea(area)}
              >
                {area}
              </button>
            );
          })}
        </div>
        <div className="dropdown">
          <div
            className="dropdown-btn"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {areaEscolhida}
          </div>
          {dropdownOpen && (
            <div className={`dropdown-content ${dropdownOpen && "open"}`}>
              {Object.keys(members).map((area) => {
                return (
                  <div
                    className={`dropdown-item ${
                      areaEscolhida === area && "dropdown-open"
                    }`} // Se estiver igual, ele vai considerar que está aberto e vai ficar branco
                    key={area}
                    onClick={() => chooseArea(area)}
                  >
                    {area}
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className={`members-container ${isOpen && "open"}`}>
          {members[areaEscolhida].map((member) => {
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
                <div className="members" key={member.name}>
                  <img src={memberInfo.avatar} alt="" className="foto" />
                  <h2 className="memberName">{member.name}</h2>
                </div>
              );
            }
            return getMemberInformations(member);
          })}
        </div>
      </div>
    </div>
  );
}
