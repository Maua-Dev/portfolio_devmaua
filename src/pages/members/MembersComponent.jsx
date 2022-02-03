import React, { useState } from "react";
import "./Members.css";
import members from "./assets/dataMembers.json";
import FiltroComponent from "./components/FiltroComponent";
import DropDownComponent from "./components/DropDownComponent";
import MembersContainerComponent from "./components/MemberContainerComponent";

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
          areaEscolhida={areaEscolhida}
          chooseArea={chooseArea}
        />
        <MembersContainerComponent
          isOpen={isOpen}
          members={members}
          areaEscolhida={areaEscolhida}
        />
      </div>
    </div>
  );
}
