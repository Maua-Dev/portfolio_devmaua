import React from "react";
import "./Contact.css";
import Card from './layout/Card.jsx'
import InscricaoCard from './layout/InscricaoCard.jsx'

export default function ContactComponent() {
  return (
    <div className="ContactComponent pages" id="Contato">
      <h1 className="titulo">Contatos</h1>

      <div className="Content">
        <Card />
        <InscricaoCard />
      </div>

    </div>

  );
}
