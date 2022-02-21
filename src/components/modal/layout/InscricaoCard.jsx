import React from "react";
import "./InscricaoCard.css";
import QR_Code from "../assets/QR_Code.png";
import { IoClose } from "react-icons/io5";

export default function InscricaoCard() {
  return (
    <div className="CaixoteModal">
      {/*Xis para fechar o modal */}
      <div className="xisHitBox">
        <IoClose className="ioClose" />
      </div>
      {/*  */}
      <div className="Inscricao">
        Nosso processo seletivo está aberto!
        <ul className="List">
          <li>Não precisa saber programar</li>
          <li>Vagas para todas as áreas</li>
        </ul>
      </div>
      <div className="Link">
        <a
          className="Botao"
          href="https://forms.gle/NG2FLfEjAW8V5r256"
          target="_blank"
          rel="noreferrer"
        >
          INSCREVA-SE
        </a>
        <img src={QR_Code} alt="QR_Code formulário" className="QR_Code" />
        <p>DE 07/02 ATÉ 07/03</p>
      </div>
    </div>
  );
}
