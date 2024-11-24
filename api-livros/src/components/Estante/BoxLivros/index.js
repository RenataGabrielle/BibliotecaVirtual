import React, { useState, useEffect } from "react";
import "./style.css";

export default function BoxLivros({ livro, handleEstadoLivro }) {
  // Definindo o estado para armazenar a opção selecionada
  const [opcaoSelecionada, setOpcaoSelecionada] = useState("");

  useEffect(() => {
    if (livro.estouLendo) {
      setOpcaoSelecionada("estouLendo");
    }
    if (livro.queroLer) {
      setOpcaoSelecionada("queroLer");
    }
    if (livro.jaLido) {
      setOpcaoSelecionada("jaLido");
    }
  }, []);

  // Função para lidar com a mudança da seleção
  const handleOpcaoEstadoLivro = (event) => {
    setOpcaoSelecionada(event.target.value);
    handleEstadoLivro(event.target.value, livro);
  };

  return (
    <div className="boxLivros">
      <a className="boxLink" href={livro.infoLink} target="_blank">
        <div className="boxPoster">
          <img
            src={livro.imageLinks.smallThumbnail}
            alt={livro.title}
            className="posterFilme"
          />
        </div>
        <div>
          <span>{livro.title}</span>
        </div>
      </a>

      <div className="boxRadio">
        <label>
          <input
            type="radio"
            name={`opcaoEstadoLivro-${livro.id}`}
            value="estouLendo"
            checked={opcaoSelecionada === "estouLendo"}
            onChange={handleOpcaoEstadoLivro}
          />
          <span className="labelRadio">Estou Lendo</span>
        </label>
        <label>
          <input
            type="radio"
            name={`opcaoEstadoLivro-${livro.id}`}
            value="queroLer"
            checked={opcaoSelecionada === "queroLer"}
            onChange={handleOpcaoEstadoLivro}
          />
          <span className="labelRadio">Quero Ler</span>
        </label>
        <label>
          <input
            type="radio"
            name={`opcaoEstadoLivro-${livro.id}`}
            value="jaLido"
            checked={opcaoSelecionada === "jaLido"}
            onChange={handleOpcaoEstadoLivro}
          />
          <span className="labelRadio">Ja lido</span>
        </label>
      </div>
    </div>
  );
}
