import React from "react";
import logo from "./assets/Logo.svg";
import "./Navbar.css";
import { Link as LinkS } from "react-scroll";

export default function NavbarComponent() {
  const linksList = [
    {
      id: 1,
      text: "Sobre Nós",
      url: "SobreNos",
    },
    {
      id: 2,
      text: "Projetos",
      url: "projetos",
    },
    {
      id: 3,
      text: "Membros",
      url: "membros",
    },
    {
      id: 4,
      text: "Contato",
      url: "Contato",
    },
  ];

  return (
    <div className="navbar">
      <a href="#home">
        <img src={logo} alt="Dev. Community" className="nav-logo" />
      </a>
      <div className="nav-container">
        {linksList.map((link) => {
          return (
            <LinkS
              className="nav-link"
              to={link.url}
              key={link.id}
              smooth={true}
              spy={true}
              offset={-document.documentElement.clientHeight * 0.075}
              duration={750}
            >
              {link.text}
            </LinkS>
          );
        })}
      </div>
    </div>
  );
}
