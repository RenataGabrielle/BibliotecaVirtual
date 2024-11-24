import React, { useState } from "react";
import "./style.css";

import MenuEstantes from "../../components/Estante/MenuEstantes";
import EstanteLivros from "../../components/Estante/EstanteLivros";

export default function Estantes({ livros, handleEstadoLivro }) {
  const [activeTab, setActiveTab] = useState("todos");

  const retornaLivrosParaExibir = () => {
    if (activeTab === "todos") {
      return livros;
    }
    if (activeTab === "estouLendo") {
      return livros.filter((livro) => livro.estouLendo);
    }
    if (activeTab === "queroLer") {
      return livros.filter((livro) => livro.queroLer);
    }
    if (activeTab === "jaLido") {
      return livros.filter((livro) => livro.jaLido);
    }
  };

  return (
    <div>
      <MenuEstantes setActiveTab={setActiveTab} />
      <EstanteLivros
        livrosFiltrados={retornaLivrosParaExibir()}
        handleEstadoLivro={handleEstadoLivro}
      />
    </div>
  );
}
