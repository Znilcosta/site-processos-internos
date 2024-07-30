import React from "react";

import "../styles/Company.css";

function Company() {
  return (
    <section className="company">
      <div>
        <h2>Missão</h2>
        <p>
          Atingir a excelência no atendimento proporcionando
          <strong> beleza</strong>, <strong>bem-estar</strong> e
          <strong> autoestima</strong>, para encantar e transformar vidas.
        </p>
      </div>
      <div>
        <h2>Visão</h2>
        <p>
          Criar um <strong>relacionamento duradouro</strong> com os nossos
          clientes, os guiando para que atinjam o seu maior
          <strong> potencial.</strong> Nos transformando em uma empresa de
          referência no atendimento e produtos.
        </p>
      </div>
      <div>
        <h2>Valores</h2>
        <p>
          Atendimento de excelência, respeito por todos, união, ética e
          proatividade.
        </p>
      </div>
    </section>
  );
}

export default Company;
