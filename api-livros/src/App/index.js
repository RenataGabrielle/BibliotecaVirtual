import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { APIkey } from "../config/key"; // Certificando-se de que o caminho está correto

import Estantes from "../pages/Estantes";
import Busca from "../pages/Busca";
import "./style.css";

export default function App() {
  const [livros, setLivros] = useState([]);

  // Adiciona os livros a arrays que definem seu estado
  const handleEstadoLivro = (estado, livro) => {
    const livrosAlterados = livros;
    const indexLivro = livrosAlterados.findIndex(
      (livroArray) => livroArray.id === livro.id
    );

    livrosAlterados[indexLivro].estouLendo = false;
    livrosAlterados[indexLivro].queroLer = false;
    livrosAlterados[indexLivro].jaLido = false;

    livrosAlterados[indexLivro][estado] = true;

    setLivros(livrosAlterados);
  };

  useEffect(() => {
    fetch(APIkey, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer 7309",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const formattedData = data.map((livro) => {
          return {
            ...livro,
            estouLendo: false,
            queroLer: false,
            jaLido: false,
          };
        });
        setLivros(formattedData);
      })
      .catch((error) => console.error("Erro ao buscar livros:", error));
  }, []);

  return (
    <Router>
      <h1>Estante de Livros</h1>
      <nav className="nav">
        <Link to="/" className="linkRouter">
          Estantes
        </Link>{" "}
        |
        <Link to="/search" className="linkRouter">
          Pesquisar
        </Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <Estantes livros={livros} handleEstadoLivro={handleEstadoLivro} />
          }
        />
        <Route
          path="/search"
          element={
            <Busca livros={livros} handleEstadoLivro={handleEstadoLivro} />
          }
        />
      </Routes>
    </Router>
  );
}
