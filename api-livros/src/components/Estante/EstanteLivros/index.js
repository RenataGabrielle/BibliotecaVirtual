import React from "react";
import "./style.css";

import BoxLivros from "../BoxLivros/index";

export default function EstanteLivros({ livrosFiltrados, handleEstadoLivro }) {
  return (
    <div className="listaLivros">
      {livrosFiltrados.map((livro) => (
        <BoxLivros
          key={livro.id}
          livro={livro}
          handleEstadoLivro={handleEstadoLivro}
        />
      ))}
    </div>
  );
}
