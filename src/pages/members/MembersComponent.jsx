import React, { useState } from "react";
import "./Members.css";
import members from "./assets/dataMembers.json";
import FiltroComponent from "./components/FiltroComponent";
import DropDownComponent from "./components/DropDownComponent";
import MembersContainerComponent from "./components/MemberContainerComponent";
import ModalTeste from "./components/ModalTeste";

export default function MembersComponent() {
  const [areaEscolhida, setAreaEscolhida] = useState("Diretoria"); // Escolhe área
  const [isOpen, setOpen] = useState(true); // Abre a área de membros
  const [dropdownOpen, setDropdownOpen] = useState(false); // Abre o dropdown menu para selecionar em mobile
  // const [modaCardlOpen, setModalCardOpen] = useState(false); // Abre o modal

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

  const [memberInfoModal, setMemberInfoModal] = useState("");

  // function getModalInfo(memberInfo) {
  //   setMemberInfoModal(memberInfo);
  //   setModalCardOpen(!modaCardlOpen);
  // }

  return (
    <div className="MembersComponent pages" id="membros">
      <h1 className="titulo">Membros</h1>
      <div className="info">
        <FiltroComponent
          members={members}
          areaEscolhida={areaEscolhida}
          chooseArea={chooseArea}
        />
        <DropDownComponent
          setDropdownOpen={setDropdownOpen}
          dropdownOpen={dropdownOpen}
          areaEscolhida={areaEscolhida}
          members={members}
          chooseArea={chooseArea}
        />
        <MembersContainerComponent
          isOpen={isOpen}
          members={members}
          areaEscolhida={areaEscolhida}
          // getModalInfo={getModalInfo}
        />
        <ModalTeste
        // open={modaCardlOpen}
        // memberInfoModal={memberInfoModal}
        // getModalInfo={getModalInfo}
        />
      </div>
    </div>
  );
}
