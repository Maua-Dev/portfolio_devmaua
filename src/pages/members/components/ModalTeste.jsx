import React from "react";
import "./ModalTeste.css";

export default function ModalTeste(props) {
  if (!props.open) return null;

  return <div className="modalCard"></div>;
}
