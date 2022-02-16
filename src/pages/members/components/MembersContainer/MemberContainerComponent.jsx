import React from "react";
import "./MemberContainerComponent.css";
import MiniCardComponent from "./MiniCardComponent";

export default function MemberContainerComponent(props) {

  return (
    <div className={`members-container ${props.isOpen && "open"}`}>
      {props.members[props.areaEscolhida].map((member, i) => {

        return (
          <MiniCardComponent
            key={i}
            member={member}
          />
        );
      })}
    </div>
  );
}
