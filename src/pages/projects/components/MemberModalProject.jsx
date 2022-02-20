import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import "./MemberModalProject.css";

export default function MemberModalProject({ membro }) {
  const [isLoadedModalPic, setLoadedModalPic] = useState(false);

  return (
    <div className="membroParticipante">
      <a
        href={membro.githubLink}
        className="membroParticipanteLink"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={membro.foto.replace("open", "uc")}
          alt={membro.name}
          className={`membroParticipanteFoto ${isLoadedModalPic && "open"}`}
          onLoad={() => setLoadedModalPic(true)}
        />
        <div className={`placeHolderModal ${isLoadedModalPic && "open"}`}>
          <FaUser />
        </div>
      </a>
      <span className="tooltiptext">{membro.name}</span>
    </div>
  );
}
