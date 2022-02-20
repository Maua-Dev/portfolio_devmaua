import React from "react";
import "./Footer.css";
import dados from "../../../package.json";

export default function FooterComponent() {
  console.log("naquele naipão @vgs_studio");
  return (
    <div className="FooterComponent">
      <p className="FooterMain"> © Dev. Community Mauá 2022</p>
      <p className="version">
        Nosso site está sob constante mudança. Versão: {dados.version}
      </p>
    </div>
  );
}
