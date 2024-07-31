import React from "react";

import { Link } from "react-router-dom";

import "../styles/Navbar.css";
import logo from "../logo/logo-salsa.png";

function Navbar() {
  return (
    <header className="navbar roboto-medium">
      <div>
        <img src={logo} alt="Logo do Grupo Salsa" />
      </div>
      <div>
        <ul className="navbar-list">
          <li>
            <Link to="/" style={{ textDecoration: "none" }}>
              <span>INICIO</span>
            </Link>
          </li>
          <li>
            <Link to="/processos" style={{ textDecoration: "none" }}>
              <span>PROCESSOS</span>
            </Link>
          </li>
          <li>
            <Link to="/aulas" style={{ textDecoration: "none" }}>
              <span>AULAS</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-list">LOGIN</div>
    </header>
  );
}

export default Navbar;
