import React from "react";

import logo from "../logo/logo-borboleta.png";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="insta">
        <span>
          <i class="fa-brands fa-instagram fa-2xl"></i>
        </span>
        <ul>
          <li>
            <a href="https://www.instagram.com/rommanelpernambuco/">
              @rommanelpernambuco
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/clubedasborboletas/">
              @clubedasborboletas
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/dsalsalovers/">@dsalsalovers</a>
          </li>
        </ul>
      </div>
      <div className="section-image">
        <img src={logo} alt="Logo do Grupo Salsa" />
        <p className="copyright">Copyright © 2024</p>
      </div>
      <div className="contact">
        <span>
          <i class="fa-brands fa-whatsapp fa-2xl"></i>
        </span>
        <p>
          Contato: <a href="tel:+5581971189238">(81) 97118-9238</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
