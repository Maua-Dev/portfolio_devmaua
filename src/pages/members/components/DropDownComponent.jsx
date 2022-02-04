import React from "react";
import "./DropDownComponent.css";
import { AiFillCaretDown } from "react-icons/ai";

export default function DropDownComponent(props) {
  let firstArea = Object.keys(props.members)[0]; // Pega a PRIMEIRA área

  return (
    <div className="dropdown">
      <div
        className="dropdown-btn"
        onClick={() => props.setDropdownOpen(!props.dropdownOpen)}
      >
        {props.areaEscolhida} <AiFillCaretDown className="setinha" />
      </div>
      {props.dropdownOpen && (
        <div className={`dropdown-content ${props.dropdownOpen && "open"}`}>
          {Object.keys(props.members).map((area) => {
            return (
              <div
                className={`dropdown-item ${
                  props.areaEscolhida === area && "dropdown-open"
                } ${area === firstArea && "dropdown-first"} `}
                // Se estiver igual, ele vai considerar que está aberto e vai ficar branco
                key={area}
                onClick={() => props.chooseArea(area)}
              >
                {area}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
