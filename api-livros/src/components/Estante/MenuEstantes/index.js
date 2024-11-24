import React, { useState } from "react";
import "./style.css";

export default function MenuEstantes({ setActiveTab }) {
  const [buttonActive, setbuttonActive] = useState("todos");

  // Função para alternar o estado
  const handleAtivarMenu = (menu) => {
    setbuttonActive(menu);
    setActiveTab(menu);
  };

  return (
    <div className="menuEstantes">
      <button
        className={`buttonMenuEstantes ${
          buttonActive === "todos" ? "active" : ""
        }`}
        onClick={() => handleAtivarMenu("todos")}
      >
        Todos
      </button>
      <button
        className={`buttonMenuEstantes ${
          buttonActive === "estouLendo" ? "active" : ""
        }`}
        onClick={() => handleAtivarMenu("estouLendo")}
      >
        Estou Lendo
      </button>
      <button
        className={`buttonMenuEstantes ${
          buttonActive === "queroLer" ? "active" : ""
        }`}
        onClick={() => handleAtivarMenu("queroLer")}
      >
        Quero Ler
      </button>
      <button
        className={`buttonMenuEstantes ${
          buttonActive === "jaLido" ? "active" : ""
        }`}
        onClick={() => handleAtivarMenu("jaLido")}
      >
        Ja Lidos
      </button>
    </div>
  );
}
