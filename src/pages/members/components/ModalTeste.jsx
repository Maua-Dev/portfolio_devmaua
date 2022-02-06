import React from "react";
import "./ModalTeste.css";
import ReactDom from "react-dom";

export default function ModalTeste(props) {
  if (!props.open) return null;

  return ReactDom.createPortal(
    <div className="modalCard">
      <div className={`modalBg`} onClick={props.getModalInfo}>
        <div className="modalContent"> </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}
