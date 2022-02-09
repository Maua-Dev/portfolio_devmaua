import React from "react";
import "./AboutUs.css";
import imagem1 from './assets/Rectangle_9.png'
import imagem2 from './assets/Rectangle_10.png'
import imagem3 from './assets/Rectangle_11.png'

export default function AboutUsComponent() {
  return (
    <div className="AboutUsComponent pages" id="SobreNos">
      <h1 className="titulo">Sobre Nós</h1>
      <div className="Content">
        <p className="Text1">
          O Dev. Community Mauá foi fundado em 2021 com o objetivo de criar uma entidade de desenvolvimento e criação de soluções computacionais. Voltado aos alunos que gostam de desafios e buscando sempre trazer um contato mais eficaz com a áreas de computação, incorporando principalmente o trabalho em equipe e as práticas do mercado.</p>
        <h3 className="Title3">O que Fazemos</h3>
        <p className="Text2">
          Buscamos projetos reais com clientes, tanto externo quanto interno Mauá, para que você possa aplicar seus conhecimentos. Trabalhamos com gerenciamento de equipe, interações com o mercado, também marketing tanto dos projetos quanto da entidade, desenvolvimento de soluções computacionais sempre buscando a melhor experiência para o usuário.
          Aqui você vai participar de todo fluxo de criação de uma solução computacional que envolve todas as áreas, aplicando padrões de projeto, arquitetura, experiencia do usuário, além de ensinarmos o mais básico para começar um projeto. Além disso, também existem as áreas internas onde você será um dos responsáveis para dar suporte e manutenção da entidade, podendo escolher entre RH, comunicação e financeiro.</p>
      </div>
      <div className="Foto">
        <img src={imagem1} alt="pc" />
        <img src={imagem2} alt="Neca" />
        <img src={imagem3} alt="Neca" />
      </div>
    </div>
  );
}

