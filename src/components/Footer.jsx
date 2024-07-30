import React from "react";

import logo from "../logo/logo-borboleta.png";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <img src={logo} alt="Logo do Grupo Salsa" />
      </div>
      <div>
        <p className="roboto-medium">Copyright © 2024</p>
      </div>
    </footer>
  );
}

export default Footer;
