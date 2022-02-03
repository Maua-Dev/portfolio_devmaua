import React from "react";
import "./DropDownComponent.css";

export default function DropDownComponent(props) {
  return (
    <div className="dropdown">
      <div
        className="dropdown-btn"
        onClick={() => props.setDropdownOpen(!props.dropdownOpen)}
      >
        {props.areaEscolhida}
      </div>
      {props.dropdownOpen && (
        <div className={`dropdown-content ${props.dropdownOpen && "open"}`}>
          {Object.keys(props.members).map((area) => {
            return (
              <div
                className={`dropdown-item ${
                  props.areaEscolhida === area && "dropdown-open"
                }`} // Se estiver igual, ele vai considerar que está aberto e vai ficar branco
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
