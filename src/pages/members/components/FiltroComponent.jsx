import React from "react";
import './FiltroComponent.css' 

export default function FiltroComponent(props) {
  return (
    <div className="categories">
      {Object.keys(props.members).map((area) => {
        return (
          <button
            className={`button ${props.areaEscolhida === area && "open"}`} // Se estiver igual, ele vai considerar que está aberto e vai ficar branco
            key={area}
            onClick={() => props.chooseArea(area)}
          >
            {area}
          </button>
        );
      })}
    </div>
  );
}
