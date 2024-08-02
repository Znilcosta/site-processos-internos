import React from "react";

import Navbar from "../components/Navbar";
import Files from "../components/Files";
import Footer from "../components/Footer";

import "../styles/Page.css";

function Procedure() {
  return (
    <body>
      <header>
        <Navbar />
      </header>
      <main>
        <Files />
      </main>
      <footer>
        <Footer />
      </footer>
    </body>
  );
}

export default Procedure;
