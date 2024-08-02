import React from "react";

import { useState } from "react";

import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";

import "../styles/Files.css";

function Files() {
  const [sector, setSector] = useState("");

  const handleChange = (e) => {
    setSector(e.target.value);
  };

  return (
    <div className="container">
      <FormControl sx={{ m: 10, minWidth: 250 }}>
        <InputLabel style={{ color: "white" }}>Setor</InputLabel>
        <Select
          className="select-sector"
          style={{ color: "white" }}
          value={sector}
          onChange={handleChange}
          label="Setor"
        >
          <MenuItem className="select-sector-text">
            <em>Escolha um Setor</em>
          </MenuItem>
          <MenuItem value="caixa">Caixa</MenuItem>
          <MenuItem value="estoque">Estoque</MenuItem>
          <MenuItem value="varejo">Varejo</MenuItem>
        </Select>
      </FormControl>
      <div></div>
    </div>
  );
}

export default Files;
