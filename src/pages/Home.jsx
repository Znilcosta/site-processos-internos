import React from "react";

import Navbar from "../components/Navbar";
import Company from "../components/Company";
import Slogan from "../components/Slogan";
import Footer from "../components/Footer";

import "../styles/Page.css";

function Home() {
  return (
    <body>
      <header>
        <Navbar />
      </header>
      <main>
        <Company />
        <Slogan />
      </main>
      <footer>
        <Footer />
      </footer>
    </body>
  );
}

export default Home;
