"use client";

import { useEffect, useState } from "react";

export default function TestErrorPage() {
  const [shouldError, setShouldError] = useState(false);

  useEffect(() => {
    if (shouldError) {
      throw new Error("Erro de teste para visualizar a página de erro 500");
    }
  }, [shouldError]);

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Página de Teste de Erro</h1>
      <p>Clique no botão abaixo para forçar um erro e ver a página de erro 500:</p>
      <button
        onClick={() => setShouldError(true)}
        style={{
          padding: "1rem 2rem",
          fontSize: "1rem",
          backgroundColor: "#AD4528",
          color: "#F1DFD2",
          border: "none",
          borderRadius: "0.5rem",
          cursor: "pointer",
        }}
      >
        Forçar Erro 500
      </button>
    </div>
  );
}

