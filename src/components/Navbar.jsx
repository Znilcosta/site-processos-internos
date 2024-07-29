import React from "react";

import "../styles/Navbar.css";
import logo from "../logo/logo-salsa.png";

function Navbar() {
  return (
    <div className="navbar roboto-medium">
      <div className="navbar-img">
        <img className="navbar-logo" src={logo} alt="Logo do Grupo Salsa" />
      </div>
      <div>
        <ul className="navbar-list">
          <li>
            <a href="#">POP</a>
          </li>
          <li>
            <a href="#">IT</a>
          </li>
          <li>
            <a href="#">VIDEOS</a>
          </li>
        </ul>
      </div>
      <div>Login</div>
    </div>
  );
}

export default Navbar;
