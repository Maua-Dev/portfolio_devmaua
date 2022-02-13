import React from "react";
import "./ModalOnLoad.css";
import ReactDom from "react-dom";

import InscricaoCard from "./layout/InscricaoCard.jsx";
import { useState, useEffect } from "react";

export default function ModalOnLoad() {
  const [modaCardOpen, setModalCardOpen] = useState(false); // Abre o modal

  useEffect(() => {
    console.log(localStorage);
    if (localStorage === null) {
      setTimeout(() => setModalCardOpen(true), 10000);
    }
  }, []);

  function setModal(e) {
    if (e.target.className === "modalBg") {
      setModalCardOpen(!modaCardOpen);
      localStorage.setItem("firstTime", "salve");
    }
  }

  if (!modaCardOpen) return null;

  return ReactDom.createPortal(
    <div className="modalCard" onClickCapture={(e) => setModal(e)}>
      <div className="modalBg">
        <InscricaoCard />
      </div>
    </div>,
    document.getElementById("portal")
  );
}
