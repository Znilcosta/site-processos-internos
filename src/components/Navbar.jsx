import React from "react";

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
            <a href="#">INICIO</a>
          </li>
          <li>
            <a href="#">POP</a>
          </li>
          <li>
            <a href="#">IT</a>
          </li>
          <li>
            <a href="#">AULAS</a>
          </li>
        </ul>
      </div>
      <div className="navbar-list">LOGIN</div>
    </header>
  );
}

export default Navbar;
