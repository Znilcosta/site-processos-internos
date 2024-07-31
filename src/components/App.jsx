import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Procedure from "../pages/Procedure";
import Classroom from "../pages/Classroom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/processos" element={<Procedure />} />
        <Route path="/aulas" element={<Classroom />} />
      </Routes>
    </div>
  );
}

export default App;
