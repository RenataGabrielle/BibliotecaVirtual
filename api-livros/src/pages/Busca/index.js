import React, { useState } from "react";
import EstanteLivros from "../../components/Estante/EstanteLivros";
import "./style.css";

export default function Busca({ livros, handleEstadoLivro }) {
  const [tituloPesquisar, setTituloPesquisar] = useState("");
  const [livrosPesquisados, setLivrosPesquisados] = useState(livros);

  // Função para atualizar o termo de busca e filtrar os livros
  const handlePesquisa = (event) => {
    const tituloPesquisado = event.target.value;
    setTituloPesquisar(tituloPesquisado);

    // Filtra os livros com base no texto digitado (case insensitive)
    const livrosFiltrados = livros.filter((livro) =>
      livro.title.toLowerCase().includes(tituloPesquisado.toLowerCase())
    );
    setLivrosPesquisados(livrosFiltrados);
  };

  return (
    <div>
      <div className="boxBuscar">
        <span>Buscar pelo Titulo:</span>
        <input
          type="text"
          value={tituloPesquisar}
          onChange={handlePesquisa}
          placeholder="Digite o nome do livro"
        />
      </div>
      <EstanteLivros
        livrosFiltrados={livrosPesquisados}
        handleEstadoLivro={handleEstadoLivro}
      />
    </div>
  );
}
