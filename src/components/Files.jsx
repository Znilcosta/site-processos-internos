import React from "react";
import { useState } from "react";

import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";

import CardLink from "./CardLink";

import "../utils/procedures";
import "../styles/Files.css";
import procedures from "../utils/procedures";

function Files() {
  const [sector, setSector] = useState("");

  const handleChange = (e) => {
    setSector(e.target.value);
  };

  function createCardLink(procedure) {
    if (procedure.sectorName === sector) {
      return <CardLink name={procedure.name} url={procedure.urlDoc} />;
    } else {
      return;
    }
  }

  return (
    <div className="container">
      <FormControl sx={{ m: 10, width: 250 }} style={{ alignSelf: "center" }}>
        <InputLabel style={{ color: "white" }}>Setor</InputLabel>
        <Select
          className="select-sector"
          style={{ color: "white", width: "250px" }}
          value={sector}
          onChange={handleChange}
          label="Setor"
        >
          <MenuItem className="select-sector-text">
            <em>Escolha um Setor</em>
          </MenuItem>
          <MenuItem value="Academia Rommanel">Academia Rommanel</MenuItem>
          <MenuItem value="Caixa">Caixa</MenuItem>
          <MenuItem value="Estoque">Estoque</MenuItem>
          <MenuItem value="Extra">Extra</MenuItem>
          <MenuItem value="Garantia">Garantia</MenuItem>
          <MenuItem value="Gerente">Gerente</MenuItem>
        </Select>
      </FormControl>
      <div className="card-area">{procedures.map(createCardLink)}</div>
    </div>
  );
}

export default Files;
