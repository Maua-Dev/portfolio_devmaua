import React from "react";
import "./ModalTeste.css";
import ReactDom from "react-dom";

export default function ModalTeste({ setModal, open, memberInfo }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <div className="modalCard">
      <div className={`modalBg`} onClick={() => setModal}>
        <div className="modalContent"> {memberInfo.name} </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}
