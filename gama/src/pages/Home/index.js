import React, { useState } from "react";
import axios from "axios";

function App(props) {
  const [usuario, setUsuario] = useState("");
  function handlePesquisa() {
    axios
      .get(`https://api.git.com/users/${usuario}/repos`)
      .then((Response) => console.log(Response.data));
  }
  return (
    <>
      <input
        className="usuarioInput"
        placeholder="Usuário"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />
      <button type="button" onClick={handlePesquisa}>
        Pesquisar
      </button>
    </>
  );
}

export default App;
